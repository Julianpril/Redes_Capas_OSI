document.addEventListener('DOMContentLoaded', function () {
    const layerLinks = document.querySelectorAll('.layer-link');
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const closeBtn = document.querySelector('.close-btn');
    const layerList = document.getElementById('layer-list');

    const capasInfo = {
        1: {
            name: "Física",
            description: "Se encarga de la transmisión y recepción de bits a través de un medio físico. Define aspectos como el tipo de cableado, la topología de la red, las señales eléctricas o ópticas utilizadas para representar los bits, así como también la sincronización y la velocidad de transmisión. \nLos tipos de protocolos que emplean son USB, Ethernet físico, Fibra óptica y Bluetooth. Estos protocolos se comunican a través de unidades de datos llamadas bits."
        },
        2: {
            name: "Enlace de Datos",
            description: "Se ocupa del redireccionamiento físico, detección y corrección de errores, acceso al medio y control del flujo. Esta capa se subdivide en dos subcapas: Control de Enlace Lógico (LLC) y Control de Acceso al Medio (MAC).\nUtilizan una variedad de protocolos, incluyendo Ethernet, Wifi, PPP y ARP. Estos protocolos se basan en la transmisión y recepción de unidades de datos conocidas como tramas."
        },
        3: {
            name: "Red",
            description: "Se encarga del direccionamiento lógico y la selección de ruta. Aquí es donde ocurre el enrutamiento de los paquetes a través de la red.\nLos protocolos vinculados a este contexto son IP, ICMP, OSPF y BGP. Estos protocolos operan utilizando paquetes como la unidad fundamental de datos."
        },
        4: {
            name: "Transporte",
            description: "Se encarga del transporte extremo a extremo y la fiabilidad de los datos. Aquí se establecen conexiones lógicas entre aplicaciones en dispositivos finales. La capa de transporte segmenta los datos en unidades más pequeñas, llamadas segmentos, y proporciona mecanismos de control de flujo y de control de errores para garantizar que los datos se entreguen de manera confiable y en orden.\nLos protocolos asociados a este contexto son TCP, UDP y SCTP. Estos protocolos utilizan segmentos o datagramas como unidades fundamentales de datos."
        },
        5: {
            name: "Sesión",
            description: "Se encarga del establecimiento, administración y finalización de las conexiones entre aplicaciones. Esta capa permite que dos aplicaciones en diferentes dispositivos establezcan, mantengan y finalicen una sesión de comunicación. Además, se encarga de la sincronización de datos y la recuperación de la sesión en caso de fallos.\nLos protocolos asociados a esta categoría son NetBIOS, RPC, PPTP y SMB. Estos protocolos operan utilizando datos como unidad fundamental de información."
        },
        6: {
            name: "presentación",
            description: "Se encarga de la representación de los datos, la compresión y la encriptación. Aquí se realizan tareas como la conversión de formatos de datos, la compresión y el cifrado para garantizar que los datos se transmitan de manera comprensible y segura entre sistemas heterogéneos.\nLos protocolos asociados con esta categoría son SSL/TLS, JPEG, GIF y MPEG. Estos protocolos emplean los datos como unidades fundamentales de información."
        },
        7: {
            name: "Aplicación",
            description: "Se encarga de proporcionar servicios a las aplicaciones. Esta capa incluye una variedad de protocolos y servicios que permiten a las aplicaciones comunicarse entre sí a través de la red. Aquí es donde se encuentran las aplicaciones reales que los usuarios utilizan para realizar tareas específicas, como el correo electrónico, la navegación web y la transferencia de archivos.\nLos protocolos asociados son HTTP, SMTP, FTP, DNS y POP3. Estos protocolos utilizan datos o mensajes como unidades básicas de información."
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

    const originalListHTML = layerList.innerHTML;

    const tpcLink = document.getElementById('tpc-link');
    tpcLink.addEventListener('click', function (event) {
        event.preventDefault();
        layerList.innerHTML = '';
         const newListContent = [
                { name: "Interfaz de Red", description: "conexión física a la red y los protocolos utilizados para transmitir datos a través del medio físico. Permite la detección y corrección de errores en la transmisión, así como la administración del flujo de datos. Los protocolos que se utilizan en esta capa son Ethernet, Wi-Fi y PPP. Las unidades que se utilizan en esta capa son los frames." },
                { name: "Internet", description: "Es responsable del enrutamiento y direccionamiento de los datos a través de una red de computadoras, incluyendo Internet. Envía paquetes de datos desde el origen hasta el destino independientemente de la topología física de la red subyacente. Los protocolos que se utilizan en esta capa son IP, ICMP y ARP. La unidad que se utiliza en esta capa es el paquete." },
                { name: "Transporte", description: "La capa de transporte establece una conexión lógica entre el dispositivo transmisor y el receptor. Los protocolos de transporte segmentan los datos en el origen para que las capas inferiores realicen el envío. Una vez que los datos llegan a su destino, se ensamblan para recuperar el mensaje original. Los protocolos que se utilizan en esta capa son TCP y UDP. Las unidades que se utilizan en esta capa son segmentos y datagramas." },
                { name: "Aplicación", description: "Algunos de los protocolos que esta capa utiliza son: HTTP, HTTPS, POP3, DNS, NTP. Las unidades que utilizan son los datos o mensajes." }
            ];
        newListContent.forEach((newLayerInfo, index) => {
            const li = document.createElement('li');
            li.style.setProperty('--i', `${8 - index}`);
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'layer-link';
            link.setAttribute('data-layer', `new-${8 - index}`);
            link.textContent = newLayerInfo.name;
            li.appendChild(link);
            layerList.appendChild(li);

            link.addEventListener('click', function (event) {
                event.preventDefault();
                overlayContent.querySelector('h2').textContent = newLayerInfo.name;
                overlayContent.querySelector('p').textContent = newLayerInfo.description;
                overlay.style.display = 'block';
            });
        });
    });
});