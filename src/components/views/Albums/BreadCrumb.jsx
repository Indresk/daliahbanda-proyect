import { useNavigate,useLocation } from "react-router"

export default function BreadCrumb(){
    const navigate = useNavigate();
    const location = useLocation();
    
    const pathnames = location.pathname.split('/').filter(p => p); // ["albums", "123"]
    
    const getPath = (index) => {
        return '/' + pathnames.slice(0, index + 1).join('/');
    };
    
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/-[a-z]/g, m => ' ' + m[1].toUpperCase());
    };

    return (
        <aside className="p-1 py-2 h-full w-[30px] border-r-black dark:border-r-white border-r-1">
            <div className="transform rotate-90 text-sm flex gap-x-2 items-center">
                {pathnames.map((name, index) => (
                    <div key={index} className="flex gap-x-2">
                        {index > 0 && <p>/</p>}
                        <p className="cursor-pointer hover:underline" onClick={()=>index===pathnames.length - 1 ? navigate(-1) : navigate(getPath(index),{ replace: true })}>
                            {capitalize(name)}
                        </p>
                    </div>
                ))}
            </div>
        </aside>
    );
}