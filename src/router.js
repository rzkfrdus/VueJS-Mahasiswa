
import { createRouter, createWebHistory } from "vue-router";

const Mahasiswa = () => import("./components/DataMahasiswa.vue")

const routes = [
    {
        path: "/mahasiswa",
        name: "mahasiswa",
        component: Mahasiswa 
    }
];

const router = createRouter({
    history : createWebHistory(), routes
});

export default router;