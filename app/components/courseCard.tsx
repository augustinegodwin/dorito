"use client"
import { useRouter } from "next/navigation"
type PageProp={
    data:Courses
}
export default function CourseCard({data}:PageProp) {
    const router=useRouter()
    const handleRoute=()=>{
        router.push(data.route)
    }
    return (
        <div key={data.id} className="bg-gray-100 py-4 rounded-xl dark:bg-white/5 w-full border border-black/5 dark:border-white/5 hover:opacity-85 flex-1 cursor-pointer ">
            <div className="flex justify-between px-4">
                <div className="flex-1 gap-4 flex flex-row">
                <div className="">
                    <h3 className=" font-semibold text-2xl">{data.serial}.</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="flex-1 font-semibold text-2xl">{data.title}</h3>
                    <span className="text-gray-700 dark:text-gray-400">
                        {data.description}
                    </span>
                </div>
                </div>
                {/* <div className="">
                <span className="text-sm text-orange-500 hover:underline">
                    {" "}
                    <span>Change</span>
                </span>
                </div> */}
            </div>
        </div>
    )
}
