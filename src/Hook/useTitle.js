import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() => { 
        document.title = `Collage | ${title}`
    }, [title])
}
export default useTitle