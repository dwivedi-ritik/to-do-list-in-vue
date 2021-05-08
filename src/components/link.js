import { firestoreDb } from "../db/firebasedb"

async function retriveAllData() {
    let tasks = []
    const todo = await firestoreDb.collection("todo").get()
    todo.docs.forEach(obj=>{
        tasks.push({
            "id":obj.id,
            "task":obj.data().task,
            "completion":obj.data().completion
        })
    })
    return tasks
}
async function pushData(obj) {
    const todo = await firestoreDb.collection("todo").add(obj)
    return todo
}

async function deleteData(id) {
    try{
        const res = await firestoreDb.collection("todo").doc(id)
        return await res.delete()
    }
    catch(err){
        return err
    }    
}

async function completionMark(id , mark){
    try{
        const res = await firestoreDb.collection("todo").doc(id)
        const currmark =  (await res.get()).data().completion
        return  await res.update({"completion": mark})
    }
    catch(err){
        return err
    }
}

export { retriveAllData , pushData , completionMark , deleteData}