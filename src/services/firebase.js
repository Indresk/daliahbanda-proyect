import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	addDoc,
	getDoc,
	updateDoc,
	orderBy,
	getDocs,
	doc,
	query,
	where,
	limit,
} from 'firebase/firestore';
import {
	initializeAppCheck,
	ReCaptchaV3Provider,
	getToken,
} from 'firebase/app-check';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASSUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

let appCheckInstance = null;

if (typeof window !== 'undefined') {
	// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
	appCheckInstance = initializeAppCheck(app, {
		provider: new ReCaptchaV3Provider(
			import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY,
		),
		isTokenAutoRefreshEnabled: true,
	});
}

const db = getFirestore(app);

async function waitForAppCheckToken() {
	if (!appCheckInstance) return;
	try {
		await getToken(appCheckInstance, false);
	} catch (error) {
		console.error('AppCheck token error:', error);
		throw error;
	}
}

export async function getGeneralData(element, reqData) {
	try {
		await waitForAppCheckToken();
		const dbResponse = await getDoc(doc(db, 'general-data', element));
		const generalObject = dbResponse.data();
		return generalObject[reqData];
	} catch (error) {
		throw new Error(`Error solicitando la data: ${error.message}`);
	}
}

export async function getFireData() {
	try {
		const dataToDeliver = [];
		const dataQuery = await getDocs(collection(db, 'general-data'));
		dataQuery.forEach((e) => dataToDeliver.push({ ...e.data(), id: e.id }));
		return dataToDeliver;
	} catch (error) {
		throw new Error(`Error solicitando el/los productos: ${error.message}`);
	}
}

export async function getUser(email) {
	try {
		const docRef = query(
			collection(db, 'users'),
			where('email', '==', email),
			limit(1),
		);
		const dbResponse = await getDocs(docRef);
		const generalObject = dbResponse.docs[0];
		return { id: generalObject.id, ...generalObject.data() };
	} catch (error) {
		throw new Error(`Error solicitando la data: ${error.message}`);
	}
}

// Funciones para recuperar imagenes

function mapDocs(snapshot) {
	return snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
}

export async function getBackstageImages(holder) {
	try {
		await waitForAppCheckToken();

		const q = query(
			collection(db, 'images'),
			where('categoriaId', '==', 'backstage'),
			orderBy('createdAt', 'desc'),
		);

		const snap = await getDocs(q);

		return mapDocs(snap);
	} catch (error) {
		throw new Error(`Error trayendo imágenes backstage: ${error.message}`);
	}
}

export async function getImagesByIntegrantes(integranteIds = []) {
	try {
		await waitForAppCheckToken();

		const results = [];

		for (const id of integranteIds) {
			const q = query(
				collection(db, 'integrantes', id, 'images'),
				orderBy('createdAt', 'desc'),
			);

			const snap = await getDocs(q);

			results.push(...mapDocs(snap));
		}

		const unique = Object.values(
			results.reduce((acc, item) => {
				acc[item.id] = item;
				return acc;
			}, {}),
		);

		return unique;
	} catch (error) {
		throw new Error(
			`Error trayendo imágenes por integrantes: ${error.message}`,
		);
	}
}

export async function getImagesByEvents(eventIds = []) {
	try {
		await waitForAppCheckToken();

		const results = [];

		for (const eventId of eventIds) {
			const q = query(
				collection(db, 'events', eventId, 'images'),
				orderBy('createdAt', 'desc'),
			);

			const snap = await getDocs(q);

			results.push(...mapDocs(snap));
		}

		return results;
	} catch (error) {
		throw new Error(`Error trayendo imágenes por eventos: ${error.message}`);
	}
}
