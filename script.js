document.addEventListener('DOMContentLoaded', function () {
    const layerLinks = document.querySelectorAll('.layer-link');
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const closeBtn = document.querySelector('.close-btn');

    const capasInfo = {
        1: {
            name: "Física",
            description: "Se encarga de la transmisión y recepción de bits a través de un medio físico. Define aspectos como el tipo de cableado, la topología de la red, las señales eléctricas o ópticas utilizadas para representar los bits, así como también la sincronización y la velocidad de transmisión."
        },
        2: {
            name: "Enlace de Datos",
            description: "Se ocupa del redireccionamiento físico, detección y corrección de errores, acceso al medio y control del flujo. Esta capa se subdivide en dos subcapas: Control de Enlace Lógico (LLC) y Control de Acceso al Medio (MAC)."
        },
        3:{
            name: "Red",
            description:"Se encarga del direccionamiento lógico y la selección de ruta. Aquí es donde ocurre el enrutamiento de los paquetes a través de la red."
        },
        4:{
            name: "Transporte",
            description:"Se encarga del transporte extremo a extremo y la fiabilidad de los datos. Aquí se establecen conexiones lógicas entre aplicaciones en dispositivos finales. La capa de transporte segmenta los datos en unidades más pequeñas, llamadas segmentos, y proporciona mecanismos de control de flujo y de control de errores para garantizar que los datos se entreguen de manera confiable y en orden."
        },
        5:{
            name:"Sesión",
            description: "Se encarga del establecimiento, administración y finalización de las conexiones entre aplicaciones. Esta capa permite que dos aplicaciones en diferentes dispositivos establezcan, mantengan y finalicen una sesión de comunicación. Además, se encarga de la sincronización de datos y la recuperación de la sesión en caso de fallos."
        },
        6:{
            name:"presentación",
            description:"Se encarga de la representación de los datos, la compresión y la encriptación. Aquí se realizan tareas como la conversión de formatos de datos, la compresión y el cifrado para garantizar que los datos se transmitan de manera comprensible y segura entre sistemas heterogéneos."
        },
        7:{
            name:"Aplicación",
            description: "Se encarga de proporcionar servicios a las aplicaciones. Esta capa incluye una variedad de protocolos y servicios que permiten a las aplicaciones comunicarse entre sí a través de la red. Aquí es donde se encuentran las aplicaciones reales que los usuarios utilizan para realizar tareas específicas, como el correo electrónico, la navegación web y la transferencia de archivos."
        },

    };

    layerLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const layerNumber = this.getAttribute('data-layer');
            const layerInfo = capasInfo[layerNumber];
            overlayContent.querySelector('h2').textContent = `${layerInfo.name}`;
            overlayContent.querySelector('p').textContent = `${layerInfo.description}`;
            overlay.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});
