export const fetchData = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error Fetching Data",err);
    }
};