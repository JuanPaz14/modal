
import React, {Suspense,lazy} from 'react';
import {createRoot} from 'react-dom/client';

export function openModal(modal,title,refButton1,refButton2){

    refButton2.current.disabled = true;
    refButton1.current.disabled = true;
 
    let Modal;
    
    if(modal === 'modalSettings'){
        Modal =lazy(()=>import('./modalSettings')); // carga el modal cuando lo llamamos 
    }else if(modal === 'modalAccount'){
        Modal = lazy(()=>import('./modalAccount'));
    }
    const modalDiv = document.createElement("div"); // crea un div 
    modalDiv.id='modal'; //le da nombre a ese div
    document.body.appendChild(modalDiv); //lo pega en el body 

    const root = createRoot(modalDiv); //renderiza o dibuja todo en el div que creamos 
    root.render(

        <Suspense fallback={<div>Loading...</div>}>
            <Modal  root={root} title={title} refb1={refButton1} refb2={refButton2} ></Modal>
        </Suspense>
        
    
    ); // react renderiza el modal dentro del div 
}

/*export function openModalAccount(){

    const Modal = lazy(()=>import('./modalSettings')); // carga el modal cuando lo llamamos 
    const modalDiv = document.createElement("div"); // crea un div 
    modalDiv.id='modal'; //le da nombre a ese div
    document.body.appendChild(modalDiv); //lo pega en el body 

    const root = createRoot(modalDiv); //renderiza o dibuja todo en el div que creamos 
    root.render(

        <Suspense fallback={<div>Loading...</div>}>
            <Modal  root={root} title='modal de tu cuenta'></Modal>
        </Suspense>
        
    
    ); // react renderiza el modal dentro del div 
}*/