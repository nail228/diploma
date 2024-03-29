import '@/api/docum'
/* eslint-disable */
import session from "@/api/session";

export default{
    state:{
        docs:[]
    },
    mutations:{

        addDoc(state,doc){
            state.docs=[doc,...state.docs]

        },
        deleteDoc(state,{id}){
            state.docs=state.docs.filter(doc=>{return doc.id!==id})
        },


    },
    getters:{
        docs:state=>state.docs
    },
actions: {
    async docsGet(){
        try{
            const req={}
            const docums=await session.get('/Base/all')
            return docums

        }catch(e){
            throw e
        }
    },
    async recDocsGet(){
        try{
            const req={}
            const docum=await session.get('/Base/rec')
            return docum

        }catch(e){
            throw e
        }
    },
    async docsDelete(doc_id){
        try{
            const dok=await session.delete('/Base/delete',{doc_id})
            return dok

        }catch(e){
            throw e
        }
    },
    async docUpdate(doc_id, ...params){
        try{
            const dock=await session.put('/Base/update',{doc_id,...params})
            return dock
        }
        catch (e) {
            throw e
        }
    },
    async downloadDoc(doc_id){
        try{
            const response=await session.post('document/download',{doc_id})
            return response
        }
        catch (e) {
            store.commit('setError')
            throw e
        }
    }
}




}

