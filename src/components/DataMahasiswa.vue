<template>
<div>
    <h3 class="d-flex justify-content-center">
            Vue JS Front End
    </h3>
    <h5 class="d-flex justify-content-center">
            Mahasiswa Management data 
    </h5>


    <button type="button"
    class="btn btn-primary m-2 fload-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="addClick()">
    Add Mahasiswa
</button>
    <table align='center'>
        <thead>
            <tr>
                <th>       
                    Npm
                </th>
                <th>
                    Nama Mahasiswa
                </th>
                <th>
                    Fakultas
                </th>
                <th>
                    Jurusan
                </th>
                <th>
                    Options
                </th>
            </tr>
        </thead>
        <tbody>
    <tr v-for="mh in mahasiswas" :key="mh.Mhs">
        <td>{{mh.Mhs}}</td>
        <td>{{mh.Nama}}</td>
        <td>{{mh.Fakultas}}</td>
        <td>{{mh.Jurusan}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(mh)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(mh.Mhs)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">Nama Mahasiswa</span>
                <input type="text" class="form-control" v-model="Nama">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Fakultas</span>
                <input type="text" class="form-control" v-model="Fakultas">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Jurusan</span>
                <input type="text" class="form-control" v-model="Jurusan">
            </div>
        </div>
        <!-- <div class="p-2 w-50 bd-highlight">
            <img width="250px" height="250px"
                :src="PhotoPath+Photofile"/>
            <input class="m-2" type="file" @change="imageUpload">
        </div> -->
    </div>
        <button type="button" @click="createClick()"
        v-if="Mhs==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="Mhs!=0" class="btn btn-primary">
        Update
        </button>
    </div>
</div>
</div>
</div>
</div>
</template>

<script>
import axios  from 'axios';
    export default {
        name: 'DataMahasiswa',
        data(){
            return{
            mahasiswas:[],
            modalTitle:"",
            Mhs:0,
            Nama:"",
            Fakultas:"",
            Jurusan:"",
            Photofile:"anonymous.png",
            // PhotoPath:"http://localhost:32623/api/mahasiswa/savepicture/",
        }
    },
    methods:{
    refreshData(){
        axios.get(this.hostname+"/api/mahasiswa")
        .then((response)=>{
            this.mahasiswas=response.data;
        });
    },
addClick(){
    this.modalTitle="Add Mahasiswa";
    this.Mhs=0;
    this.Nama="";
    this.Fakultas="";
    this.Jurusan="";
    this.Photofile="anonymous.png"
},
editClick(mh){
    this.modalTitle="Edit Mahasiswa";
    this.Mhs=mh.Mhs;
    this.Nama=mh.Nama;
    this.Fakultas=mh.Fakultas;
    this.Jurusan=mh.Jurusan;
    this.Photofile=mh.Photofile;
},
createClick(){
    axios.post(this.hostname+"/api/mahasiswa",{
        Nama:this.Nama,
        Fakultas:this.Fakultas,
        Jurusan:this.Jurusan,
        Photofile:this.Photofile
    })
    .then((response)=>{
        this.refreshData();
        alert(response.data);
    });
},
updateClick(){
    axios.put(this.hostname+"/api/mahasiswa",{
        Mhs:this.Mhs,
        Nama:this.Nama,
        Fakultas:this.Fakultas,
        Jurusan:this.Jurusan,
        Photofile:this.Photofile
    })
    .then((response)=>{
        this.refreshData();
        alert(response.data);
    });
},
deleteClick(id){
    if(!confirm("Are you sure?")){
        return;
    }
    axios.delete(this.hostname+"/api/mahasiswa/"+id)
    .then((response)=>{
        this.refreshData();
        alert(response.data);
    });

}
},
mounted:function(){
    this.refreshData();
}
}
</script>

<style scoped>
table{
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border-spacing: 0;
    padding:0;
    table-layout:fixed;
    width: 800px;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 4px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  text-align:center;
}
</style>