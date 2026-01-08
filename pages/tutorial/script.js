const translations = {
    pt: {
        // Hero Section
        "hero.title": "Guia Completo do <span class=\"highlight\">ClockIn.IT</span>",
        "hero.description": "Configure seu sistema de ponto eletrônico em minutos com nosso tutorial passo a passo",
        "hero.btn_start": "Começar Tutorial",

        // Section Intro
        "section.title": "Como Configurar o Sistema",
        "section.description": "Siga os passos organizados abaixo para configurar e usar o ClockIn.IT",

        // Accordion 1: Cadastro de Empresa [RH]
        "acc1.title": "Cadastro de Empresa [RH]",
        "acc1.subtitle": "Cadastre a estrutura organizacional da empresa",
        "acc1.step1.title": "Criar Holding",
        "acc1.step1.desc": "A Holding é o nível mais alto da hierarquia. Aqui você pode definir configurações gerais de ponto que serão herdadas por toda a organização, ou deixar que o sistema use as configurações padrão.",
        "acc1.step1.info_title": "O que configurar:",
        "acc1.step1.info1": "Nome da Holding",
        "acc1.step1.info2": "Configuração de ponto (opcional - se não definida, usa padrão do sistema)",
        "acc1.step2.title": "Criar Marca",
        "acc1.step2.desc": "A Brand representa a marca ou divisão dentro da Holding. É útil para empresas que possuem múltiplas marcas ou divisões de negócio.",
        "acc1.step3.title": "Criar Empresa",
        "acc1.step3.desc": "Aqui você define os dados da empresa que utilizará o sistema de ponto.",
        "acc1.step4.title": "Criar Unidade Organizacional",
        "acc1.step4.desc": "A Unidade Organizacional representa filiais, escritórios ou localizações físicas da empresa. Cada unidade pode ter seus próprios departamentos e colaboradores.",
        "acc1.step5.title": "Criar Departamento",
        "acc1.step5.desc": "O Departamento é onde você agrupa colaboradores por área de atuação (RH, TI, Vendas, etc.). Cada departamento pertence a uma unidade organizacional.",
        "acc1.step5.highlight": "Pronto! Sua estrutura organizacional está completa. Agora você pode cadastrar os colaboradores.",

        // Accordion 2: Configuração de Grupo de Colaboradores [RH]
        "acc2.title": "Configuração de Grupo de Colaboradores [RH]",
        "acc2.subtitle": "Cadastre colaboradores e organize em grupos",
        "acc2.step1.title": "Criar Colaborador",
        "acc2.step1.desc": "Cadastre cada colaborador no sistema com suas informações pessoais e profissionais. Você pode fornecer uma configuração de ponto específica para o colaborador, ou ele herdará a configuração do grupo de colaboradores.",
        "acc2.step2.title": "Criar Grupo de Colaboradores",
        "acc2.step2.desc": "Os grupos de colaboradores permitem organizar colaboradores que compartilham as mesmas regras de ponto. Cada grupo pode ter sua própria configuração de ponto ou herdar da Holding.",
        "acc2.step2.info_title": "Importante saber:",
        "acc2.step2.info2": "Configure regras de ponto específicas (opcional)",
        "acc2.step2.info3": "Se não configurado, usa as regras da Holding",

        // Accordion 3: Cadastro de Coletor Quiosque [RH]
        "acc3.title": "Cadastro de Coletor Quiosque [RH]",
        "acc3.subtitle": "Cadastre o coletor e ative ele no app multiple",
        "acc3.step1.title": "Criar Coletor Múltiplo",
        "acc3.step1.desc": "Você pode criar um Coletor Múltiplo associando um grupo de colaboradores existente. O sistema irá gerar um código único que permite ativar o app ClockIn Multiple.",
        "acc3.step3.highlight": "Atenção: Guarde o código gerado! Ele será necessário para configurar o app Clockin Multiple onde os colaboradores registrarão seus pontos.",
        "acc3.step3.info_title": "Sobre o código:",
        "acc3.step3.info1": "O código tem validade de 1 hora",
        "acc3.step3.info2": "Se expirar, crie um novo coletor múltiplo",
        "acc3.step3.info3": "Um código pode ser usado somente em um dispositivo",
        "acc3.step2.title": "Ativar o Coletor Quiosque no App Clockinit Multi",
        "acc3.step2.desc": "O app Clockinit Multi é onde os colaboradores registram seus pontos usando reconhecimento facial. Este app deve ser instalado em um dispositivo compartilhado (tablet ou celular) que ficará no local de trabalho.",
        "acc3.step2.info_title": "Como ativar o Coletor Multiple:",
        "acc3.step2.info1": "Baixe o app \"Clockin Multi\" na Play Store",
        "acc3.step2.info2": "Abra o app pela primeira vez",
        "acc3.step2.info3": "Insira o código do Coletor Múltiplo (gerado no painel administrativo)",
        "acc3.step2.info4": "O app será ativado e sincronizado com o grupo de colaboradores",

        // Accordion 4: Cadastro de face de Colaborador [RH]
        "acc4.title": "Cadastro de face de Colaborador [RH]",
        "acc4.subtitle": "Cadastre a face do colaborador e Sincronize no app multiple",
        "acc4.step1.title": "Cadastro de Foto - App Register",
        "acc4.step1.desc": "Para colaboradores que vão utilizar o app Multiple (reconhecimento facial), é necessário cadastrar fotos do rosto no sistema. Este processo pode ser feito no app Register.",
        "acc4.step1.info_title": "Usando o App Register:",
        "acc4.step1.info1": "Baixe o app \"Clockin Register\" na Play Store",
        "acc4.step1.info2": "Deve ser um Administrador de Recursos Humanos para poder cadastrar as imagens",
        "acc4.step1.info3": "Abra o app e insira o código da Holding",
        "acc4.step1.info4": "Digite seu email ou ID pessoal (matrícula)",
        "acc4.step1.info5": "Um email com código de ativação será enviado para o email do colaborador",
        "acc4.step1.info6": "Insira o código recebido por email",
        "acc4.step1.info7": "Defina sua senha de acesso",
        "acc4.step1.highlight": "Importante: Use boa iluminação e tire fotos de frente. Escolha um local com fundo neutro, evite usar óculos escuros, bonés ou qualquer acessório que cubra o rosto para garantir melhor reconhecimento facial. O app Register pode demorar um pouco para liberar o botão de confirmar, isso acontece porque ele está buscando a melhor qualidade de imagem possível do colaborador.",
        "acc4.step2.title": "Sincronizar Face IDs",
        "acc4.step2.desc": "Depois que os colaboradores cadastrarem suas fotos no app Register, é necessário sincronizar essas informações com o app Multiple para que o reconhecimento facial funcione.",
        "acc4.step2.info_title": "Como sincronizar:",
        "acc4.step2.info1": "Abra o app Clockinit Multi no dispositivo coletor",
        "acc4.step2.info2": "Toque no menu no canto superior esquerdo (☰)",
        "acc4.step2.info3": "Selecione a opção \"Sincronizar Base Face IDs\"",
        "acc4.step2.info4": "Aguarde o download das informações faciais",
        "acc4.step2.info5": "Pronto! Agora os colaboradores podem bater ponto com reconhecimento facial",
        "acc4.step3.title": "Registrar Ponto",
        "acc4.step3.desc": "Com tudo configurado, os colaboradores já podem registrar seus pontos de entrada e saída usando o reconhecimento facial no app Clockinit Multi.",
        "acc4.step3.info_title": "Como bater ponto:",
        "acc4.step3.info1": "Aproxime-se do dispositivo com o app ClockIn Multi",
        "acc4.step3.info2": "Posicione seu rosto na frente da câmera",
        "acc4.step3.info3": "O sistema reconhecerá automaticamente seu rosto",
        "acc4.step3.info4": "Confirme o tipo de marcação (entrada ou saída, esta opção aparecerá se estiver ativada na configuração do ponto)",
        "acc4.step3.info5": "Ponto marcado com sucesso!",
        "acc4.step3.highlight": "Parabéns! Seu sistema Clockin.It está completamente configurado e funcionando. As marcações de ponto podem ser visualizadas e gerenciadas através do painel administrativo na web.",

        // Accordion 5: Cadastro de Coletor Individual [COLABORADOR]
        "acc5.title": "Cadastro de Coletor Individual [COLABORADOR]",
        "acc5.subtitle": "Ative a conta e comece a registrar pontos",
        "acc5.step1.title": "Primeiro Acesso - App Clockinit Single",
        "acc5.step1.desc": "Depois de criado o usuário no sistema, o colaborador pode fazer o primeiro acesso através do app Clockinit Single. Este app permite que cada colaborador ative sua própria conta de forma individual, podendo assim bater o ponto com seu dispositivo móvel.",
        "acc5.step1.info_title": "Como fazer o primeiro acesso:",
        "acc5.step1.info1": "Baixe o app \"Clockinit Single\" na Play Store",
        "acc5.step1.info2": "Abra o app e insira o código da Holding",
        "acc5.step1.info3": "Digite seu email ou ID pessoal (matrícula)",
        "acc5.step1.info4": "Um email com código de ativação será enviado para o email do colaborador",
        "acc5.step1.info5": "Insira o código recebido por email",
        "acc5.step1.info6": "Defina sua senha de acesso",
        "acc5.step1.highlight": "Dica: Guarde bem sua senha! Ela será usada para acessar os aplicativos Clockin.",
        "acc5.step2.title": "Registrar Ponto",
        "acc5.step2.desc": "Com tudo configurado, o colaborador já pode registrar seus pontos de entrada e saída usando as diversas maneiras que o app Clockinit Single oferece.",
        "acc5.step2.info_title": "Como bater ponto:",
        "acc5.step2.info1": "Selecione a opção de marcação desejada entrada ou saída",
        "acc5.step2.info2": "Selecione uma opção de marcação de ponto",
        "acc5.step2.info3": "As opções de marcação de ponto podem ser alteradas pelo administrador na configuração do ponto do colaborador ou da holding",
        "acc5.step2.info5": "Para utilizar a marcação por Reconhecimento Facial, o Administrador de Recursos Humanos deve ter cadastrado a face do colaborador no app ClockIn Register previamente. Se o cadastro for feito depois que o colaborador já tiver acessado o app ClockIn Single, é necessário que o colaborador faça login novamente para atualizar a base de faces",
        "acc5.step2.info6": "Ponto marcado com sucesso!",
        "acc5.step2.highlight": "Parabéns! Seu sistema Clockin.It está completamente configurado e funcionando. As marcações de ponto podem ser visualizadas e gerenciadas através do painel administrativo na web.",

        // CTA
        "cta.title": "Precisa de Ajuda?",
        "cta.description": "Nossa equipe de suporte está pronta para ajudar você em qualquer etapa da configuração",
        "cta.btn_support": "Contatar Suporte",
        "cta.btn_home": "Voltar a Página Inicial",

        // Footer
        "footer.copyright": "© 2026 ClockIn.IT. Todos os direitos reservados.",
        "footer.privacy": "Política de Privacidade",
        "footer.terms": "Termos de Uso",
        "footer.tutorial": "Guía"
    },

    en: {
        // Hero Section
        "hero.title": "Complete Guide to <span class=\"highlight\">ClockIn.IT</span>",
        "hero.description": "Set up your time tracking system in minutes with our step-by-step tutorial",
        "hero.btn_start": "Start Tutorial",

        // Section Intro
        "section.title": "How to Configure the System",
        "section.description": "Follow the organized steps below to configure and use ClockIn.IT",

        // Accordion 1: Company Registration [HR]
        "acc1.title": "Company Registration [HR]",
        "acc1.subtitle": "Register the company's organizational structure",
        "acc1.step1.title": "Create Holding",
        "acc1.step1.desc": "The Holding is the highest level of the hierarchy. Here you can define general time tracking settings that will be inherited by the entire organization, or let the system use default settings.",
        "acc1.step1.info_title": "What to configure:",
        "acc1.step1.info1": "Holding name",
        "acc1.step1.info2": "Time tracking configuration (optional - uses system default if not defined)",
        "acc1.step2.title": "Create Brand",
        "acc1.step2.desc": "The Brand represents the brand or division within the Holding. It's useful for companies that have multiple brands or business divisions.",
        "acc1.step3.title": "Create Company",
        "acc1.step3.desc": "Here you define the company data that will use the time tracking system.",
        "acc1.step4.title": "Create Organizational Unit",
        "acc1.step4.desc": "The Organizational Unit represents branches, offices, or physical locations of the company. Each unit can have its own departments and employees.",
        "acc1.step5.title": "Create Department",
        "acc1.step5.desc": "The Department is where you group employees by area of activity (HR, IT, Sales, etc.). Each department belongs to an organizational unit.",
        "acc1.step5.highlight": "Done! Your organizational structure is complete. Now you can register employees.",

        // Accordion 2: Employee Group Configuration [HR]
        "acc2.title": "Employee Group Configuration [HR]",
        "acc2.subtitle": "Register employees and organize into groups",
        "acc2.step1.title": "Create Employee",
        "acc2.step1.desc": "Register each employee in the system with their personal and professional information. You can provide a specific time tracking configuration for the employee, or they will inherit the configuration from the employee group.",
        "acc2.step2.title": "Create Employee Group",
        "acc2.step2.desc": "Employee groups allow you to organize employees who share the same time tracking rules. Each group can have its own time tracking configuration or inherit from the Holding.",
        "acc2.step2.info_title": "Important to know:",
        "acc2.step2.info2": "Configure specific time tracking rules (optional)",
        "acc2.step2.info3": "If not configured, uses Holding rules",

        // Accordion 3: Kiosk Collector Registration [HR]
        "acc3.title": "Kiosk Collector Registration [HR]",
        "acc3.subtitle": "Register the collector and activate it in the multiple app",
        "acc3.step1.title": "Create Multiple Collector",
        "acc3.step1.desc": "You can create a Multiple Collector by associating an existing employee group. The system will generate a unique code that allows you to activate the ClockIn Multiple app.",
        "acc3.step3.highlight": "Attention: Save the generated code! It will be needed to configure the Clockin Multiple app where employees will register their time.",
        "acc3.step3.info_title": "About the code:",
        "acc3.step3.info1": "The code is valid for 1 hour",
        "acc3.step3.info2": "If it expires, create a new multiple collector",
        "acc3.step3.info3": "A code can only be used on one device",
        "acc3.step2.title": "Activate Kiosk Collector in Clockinit Multi App",
        "acc3.step2.desc": "The Clockinit Multi app is where employees register their time using facial recognition. This app should be installed on a shared device (tablet or phone) that will be at the workplace.",
        "acc3.step2.info_title": "How to activate the Multiple Collector:",
        "acc3.step2.info1": "Download the \"Clockin Multi\" app from Play Store",
        "acc3.step2.info2": "Open the app for the first time",
        "acc3.step2.info3": "Enter the Multiple Collector code (generated in admin panel)",
        "acc3.step2.info4": "The app will be activated and synced with the employee group",

        // Accordion 4: Employee Face Registration [HR]
        "acc4.title": "Employee Face Registration [HR]",
        "acc4.subtitle": "Register employee's face and sync in multiple app",
        "acc4.step1.title": "Photo Registration - Register App",
        "acc4.step1.desc": "For employees who will use the Multiple app (facial recognition), it's necessary to register face photos in the system. This process can be done in the Register app.",
        "acc4.step1.info_title": "Using the Register App:",
        "acc4.step1.info1": "Download the \"Clockin Register\" app from Play Store",
        "acc4.step1.info2": "Must be a Human Resources Administrator to register images",
        "acc4.step1.info3": "Open the app and enter the Holding code",
        "acc4.step1.info4": "Enter your email or personal ID (registration number)",
        "acc4.step1.info5": "An email with activation code will be sent to the employee's email",
        "acc4.step1.info6": "Enter the code received by email",
        "acc4.step1.info7": "Set your access password",
        "acc4.step1.highlight": "Important: Use good lighting and take front-facing photos. Choose a location with a neutral background, avoid using sunglasses, hats or any accessory that covers the face to ensure better facial recognition. The Register app may take a while to enable the confirm button, this happens because it is searching for the best possible image quality of the employee.",
        "acc4.step2.title": "Sync Face IDs",
        "acc4.step2.desc": "After employees register their photos in the Register app, it's necessary to sync this information with the Multiple app for facial recognition to work.",
        "acc4.step2.info_title": "How to sync:",
        "acc4.step2.info1": "Open the Clockinit Multi app on the collector device",
        "acc4.step2.info2": "Tap the menu in the upper left corner (☰)",
        "acc4.step2.info3": "Select the \"Sync Face IDs Database\" option",
        "acc4.step2.info4": "Wait for the facial information download",
        "acc4.step2.info5": "Done! Now employees can clock in with facial recognition",
        "acc4.step3.title": "Register Time",
        "acc4.step3.desc": "With everything configured, employees can now register their clock in and out times using facial recognition in the Clockinit Multi app.",
        "acc4.step3.info_title": "How to clock in:",
        "acc4.step3.info1": "Approach the device with the ClockIn Multi app",
        "acc4.step3.info2": "Position your face in front of the camera",
        "acc4.step3.info3": "The system will automatically recognize your face",
        "acc4.step3.info4": "Confirm the record type (clock in or clock out, this option will appear if enabled in the time configuration)",
        "acc4.step3.info5": "Time registered successfully!",
        "acc4.step3.highlight": "Congratulations! Your Clockin.It system is fully configured and working. Time records can be viewed and managed through the web admin panel.",

        // Accordion 5: Individual Collector Registration [EMPLOYEE]
        "acc5.title": "Individual Collector Registration [EMPLOYEE]",
        "acc5.subtitle": "Activate account and start registering time",
        "acc5.step1.title": "First Access - Clockinit Single App",
        "acc5.step1.desc": "After the user is created in the system, the employee can make the first access through the Clockinit Single app. This app allows each employee to activate their own account individually, being able to clock in using their mobile device.",
        "acc5.step1.info_title": "How to make first access:",
        "acc5.step1.info1": "Download the \"Clockinit Single\" app from Play Store",
        "acc5.step1.info2": "Open the app and enter the Holding code",
        "acc5.step1.info3": "Enter your email or personal ID (registration number)",
        "acc5.step1.info4": "An email with activation code will be sent to the employee's email",
        "acc5.step1.info5": "Enter the code received by email",
        "acc5.step1.info6": "Set your access password",
        "acc5.step1.highlight": "Tip: Keep your password safe! It will be used to access Clockin apps.",
        "acc5.step2.title": "Register Time",
        "acc5.step2.desc": "With everything configured, the employee can now register their clock in and out times using the various methods that the Clockinit Single app offers.",
        "acc5.step2.info_title": "How to clock in:",
        "acc5.step2.info1": "Select the desired record option clock in or clock out",
        "acc5.step2.info2": "Select a time recording option",
        "acc5.step2.info3": "Time recording options can be changed by the administrator in the employee's or holding's time configuration",
        "acc5.step2.info5": "To use Facial Recognition, the Human Resources Administrator must have previously registered the employee's face in the ClockIn Register app. If registration is done after the employee has already accessed the ClockIn Single app, the employee must log in again to update the face database",
        "acc5.step2.info6": "Time registered successfully!",
        "acc5.step2.highlight": "Congratulations! Your Clockin.It system is fully configured and working. Time records can be viewed and managed through the web admin panel.",

        // CTA
        "cta.title": "Need Help?",
        "cta.description": "Our support team is ready to help you at any stage of configuration",
        "cta.btn_support": "Contact Support",
        "cta.btn_home": "Back to Home Page",

        // Footer
        "footer.copyright": "© 2026 ClockIn.IT. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Use",
        "footer.tutorial": "Guide"
    },

    es: {
        // Hero Section
        "hero.title": "Guía Completa de <span class=\"highlight\">ClockIn.IT</span>",
        "hero.description": "Configure su sistema de control de tiempo en minutos con nuestro tutorial paso a paso",
        "hero.btn_start": "Comenzar Tutorial",

        // Section Intro
        "section.title": "Cómo Configurar el Sistema",
        "section.description": "Siga los pasos organizados a continuación para configurar y usar ClockIn.IT",

        // Accordion 1: Registro de Empresa [RH]
        "acc1.title": "Registro de Empresa [RH]",
        "acc1.subtitle": "Registre la estructura organizacional de la empresa",
        "acc1.step1.title": "Crear Holding",
        "acc1.step1.desc": "El Holding es el nivel más alto de la jerarquía. Aquí puede definir configuraciones generales de control de tiempo que serán heredadas por toda la organización, o dejar que el sistema use configuraciones predeterminadas.",
        "acc1.step1.info_title": "Qué configurar:",
        "acc1.step1.info1": "Nombre del Holding",
        "acc1.step1.info2": "Configuración de control de tiempo (opcional - usa predeterminado del sistema si no está definido)",
        "acc1.step2.title": "Crear Marca",
        "acc1.step2.desc": "La Marca representa la marca o división dentro del Holding. Es útil para empresas que tienen múltiples marcas o divisiones de negocio.",
        "acc1.step3.title": "Crear Empresa",
        "acc1.step3.desc": "Aquí define los datos de la empresa que utilizará el sistema de control de tiempo.",
        "acc1.step4.title": "Crear Unidad Organizacional",
        "acc1.step4.desc": "La Unidad Organizacional representa sucursales, oficinas o ubicaciones físicas de la empresa. Cada unidad puede tener sus propios departamentos y colaboradores.",
        "acc1.step5.title": "Crear Departamento",
        "acc1.step5.desc": "El Departamento es donde agrupa colaboradores por área de actividad (RRHH, TI, Ventas, etc.). Cada departamento pertenece a una unidad organizacional.",
        "acc1.step5.highlight": "¡Listo! Su estructura organizacional está completa. Ahora puede registrar colaboradores.",

        // Accordion 2: Configuración de Grupo de Colaboradores [RH]
        "acc2.title": "Configuración de Grupo de Colaboradores [RH]",
        "acc2.subtitle": "Registre colaboradores y organice en grupos",
        "acc2.step1.title": "Crear Colaborador",
        "acc2.step1.desc": "Registre cada colaborador en el sistema con su información personal y profesional. Puede proporcionar una configuración de control de tiempo específica para el colaborador, o heredará la configuración del grupo de colaboradores.",
        "acc2.step2.title": "Crear Grupo de Colaboradores",
        "acc2.step2.desc": "Los grupos de colaboradores le permiten organizar colaboradores que comparten las mismas reglas de control de tiempo. Cada grupo puede tener su propia configuración de control de tiempo o heredar del Holding.",
        "acc2.step2.info_title": "Importante saber:",
        "acc2.step2.info2": "Configure reglas de control de tiempo específicas (opcional)",
        "acc2.step2.info3": "Si no está configurado, usa las reglas del Holding",

        // Accordion 3: Registro de Colector Quiosco [RH]
        "acc3.title": "Registro de Colector Quiosco [RH]",
        "acc3.subtitle": "Registre el colector y actívelo en la app multiple",
        "acc3.step1.title": "Crear Colector Múltiple",
        "acc3.step1.desc": "Puede crear un Colector Múltiple asociando un grupo de colaboradores existente. El sistema generará un código único que permite activar la app ClockIn Multiple.",
        "acc3.step3.highlight": "Atención: ¡Guarde el código generado! Será necesario para configurar la app Clockin Multiple donde los colaboradores registrarán su tiempo.",
        "acc3.step3.info_title": "Sobre el código:",
        "acc3.step3.info1": "El código es válido por 1 hora",
        "acc3.step3.info2": "Si expira, cree un nuevo colector múltiple",
        "acc3.step3.info3": "Un código solo puede usarse en un dispositivo",
        "acc3.step2.title": "Activar Colector Quiosco en App Clockinit Multi",
        "acc3.step2.desc": "La app Clockinit Multi es donde los colaboradores registran su tiempo usando reconocimiento facial. Esta app debe instalarse en un dispositivo compartido (tablet o teléfono) que estará en el lugar de trabajo.",
        "acc3.step2.info_title": "Cómo activar el Colector Multiple:",
        "acc3.step2.info1": "Descargue la app \"Clockin Multi\" de Play Store",
        "acc3.step2.info2": "Abra la app por primera vez",
        "acc3.step2.info3": "Ingrese el código del Colector Múltiple (generado en el panel de administración)",
        "acc3.step2.info4": "La app se activará y sincronizará con el grupo de colaboradores",

        // Accordion 4: Registro de Rostro de Colaborador [RH]
        "acc4.title": "Registro de Rostro de Colaborador [RH]",
        "acc4.subtitle": "Registre el rostro del colaborador y sincronice en la app multiple",
        "acc4.step1.title": "Registro de Foto - App Register",
        "acc4.step1.desc": "Para colaboradores que usarán la app Multiple (reconocimiento facial), es necesario registrar fotos del rostro en el sistema. Este proceso se puede hacer en la app Register.",
        "acc4.step1.info_title": "Usando la App Register:",
        "acc4.step1.info1": "Descargue la app \"Clockin Register\" de Play Store",
        "acc4.step1.info2": "Debe ser un Administrador de Recursos Humanos para poder registrar las imágenes",
        "acc4.step1.info3": "Abra la app e ingrese el código del Holding",
        "acc4.step1.info4": "Ingrese su email o ID personal (matrícula)",
        "acc4.step1.info5": "Se enviará un email con el código de activación al email del colaborador",
        "acc4.step1.info6": "Ingrese el código recibido por email",
        "acc4.step1.info7": "Defina su contraseña de acceso",
        "acc4.step1.highlight": "Importante: Use buena iluminación y tome fotos de frente. Elija un lugar con fondo neutro, evite usar gafas oscuras, gorras o cualquier accesorio que cubra el rostro para garantizar un mejor reconocimiento facial. La app Register puede demorar un poco en habilitar el botón de confirmar, esto sucede porque está buscando la mejor calidad de imagen posible del colaborador.",
        "acc4.step2.title": "Sincronizar Face IDs",
        "acc4.step2.desc": "Después de que los colaboradores registren sus fotos en la app Register, es necesario sincronizar esta información con la app Multiple para que funcione el reconocimiento facial.",
        "acc4.step2.info_title": "Cómo sincronizar:",
        "acc4.step2.info1": "Abra la app Clockinit Multi en el dispositivo colector",
        "acc4.step2.info2": "Toque el menú en la esquina superior izquierda (☰)",
        "acc4.step2.info3": "Seleccione la opción \"Sincronizar Base Face IDs\"",
        "acc4.step2.info4": "Espere la descarga de la información facial",
        "acc4.step2.info5": "¡Listo! Ahora los colaboradores pueden registrar tiempo con reconocimiento facial",
        "acc4.step3.title": "Registrar Tiempo",
        "acc4.step3.desc": "Con todo configurado, los colaboradores ya pueden registrar sus tiempos de entrada y salida usando el reconocimiento facial en la app Clockinit Multi.",
        "acc4.step3.info_title": "Cómo registrar tiempo:",
        "acc4.step3.info1": "Acérquese al dispositivo con la app ClockIn Multi",
        "acc4.step3.info2": "Posicione su rostro frente a la cámara",
        "acc4.step3.info3": "El sistema reconocerá automáticamente su rostro",
        "acc4.step3.info4": "Confirme el tipo de registro (entrada o salida, esta opción aparecerá si está habilitada en la configuración del tiempo)",
        "acc4.step3.info5": "¡Tiempo registrado con éxito!",
        "acc4.step3.highlight": "¡Felicitaciones! Su sistema Clockin.It está completamente configurado y funcionando. Los registros de tiempo pueden verse y administrarse a través del panel de administración web.",

        // Accordion 5: Registro de Colector Individual [COLABORADOR]
        "acc5.title": "Registro de Colector Individual [COLABORADOR]",
        "acc5.subtitle": "Active la cuenta y comience a registrar tiempo",
        "acc5.step1.title": "Primer Acceso - App Clockinit Single",
        "acc5.step1.desc": "Después de crear el usuario en el sistema, el colaborador puede hacer el primer acceso a través de la app Clockinit Single. Esta app permite que cada colaborador active su propia cuenta individualmente, pudiendo así registrar el tiempo con su dispositivo móvil.",
        "acc5.step1.info_title": "Cómo hacer el primer acceso:",
        "acc5.step1.info1": "Descargue la app \"Clockinit Single\" de Play Store",
        "acc5.step1.info2": "Abra la app e ingrese el código del Holding",
        "acc5.step1.info3": "Ingrese su email o ID personal (matrícula)",
        "acc5.step1.info4": "Se enviará un email con el código de activación al email del colaborador",
        "acc5.step1.info5": "Ingrese el código recibido por email",
        "acc5.step1.info6": "Defina su contraseña de acceso",
        "acc5.step1.highlight": "Consejo: ¡Guarde bien su contraseña! Se utilizará para acceder a las apps Clockin.",
        "acc5.step2.title": "Registrar Tiempo",
        "acc5.step2.desc": "Con todo configurado, el colaborador ya puede registrar sus tiempos de entrada y salida usando las diversas formas que la app Clockinit Single ofrece.",
        "acc5.step2.info_title": "Cómo registrar tiempo:",
        "acc5.step2.info1": "Seleccione la opción de registro deseada entrada o salida",
        "acc5.step2.info2": "Seleccione una opción de registro de tiempo",
        "acc5.step2.info3": "Las opciones de registro de tiempo pueden ser cambiadas por el administrador en la configuración de tiempo del colaborador o del holding",
        "acc5.step2.info5": "Para utilizar Reconocimiento Facial, el Administrador de Recursos Humanos debe haber registrado previamente el rostro del colaborador en la app ClockIn Register. Si el registro se hace después de que el colaborador ya haya accedido a la app ClockIn Single, es necesario que el colaborador inicie sesión nuevamente para actualizar la base de rostros",
        "acc5.step2.info6": "¡Tiempo registrado con éxito!",
        "acc5.step2.highlight": "¡Felicitaciones! Su sistema Clockin.It está completamente configurado y funcionando. Los registros de tiempo pueden verse y administrarse a través del panel de administración web.",

        // CTA
        "cta.title": "¿Necesita Ayuda?",
        "cta.description": "Nuestro equipo de soporte está listo para ayudarlo en cualquier etapa de la configuración",
        "cta.btn_support": "Contactar Soporte",
        "cta.btn_home": "Volver a la Página Inicial",

        // Footer
        "footer.copyright": "© 2026 ClockIn.IT. Todos los derechos reservados.",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Uso",
        "footer.tutorial": "Guía"
    }
};

// Language Management


// Language Management
let currentLanguage = localStorage.getItem('clockinit_lang') || 'pt';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('clockinit_lang', lang);
    updatePageContent();
    updateLanguageButtons();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

function updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key];

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
}

function updateLanguageButtons() {
    // Update the select element with current language
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }
}

// Accordion Management
function toggleAccordion(accordionId, shouldScroll = false) {
    const accordionItem = document.querySelector(`[data-accordion="${accordionId}"]`);
    const allAccordions = document.querySelectorAll('.accordion-item');

    // Close all other accordions
    allAccordions.forEach(item => {
        if (item !== accordionItem && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });

    // Open the accordion if it's not already active
    if (!accordionItem.classList.contains('active')) {
        accordionItem.classList.add('active');
    }

    // Update URL with accordion state
    updateURLState(accordionId, accordionItem.classList.contains('active'));

    // Smooth scroll to accordion if requested
    if (shouldScroll) {
        setTimeout(() => {
            accordionItem.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }
}

// URL State Management for Deep Linking
function updateURLState(accordionId, isOpen) {
    if (!isOpen) {
        // Remove accordion from URL if closed
        const url = new URL(window.location);
        url.searchParams.delete('accordion');
        url.hash = '';
        window.history.pushState({}, '', url);
        return;
    }

    // Add accordion to URL if open
    const url = new URL(window.location);
    url.searchParams.set('accordion', accordionId);
    url.hash = accordionId;
    window.history.pushState({}, '', url);
}

function loadStateFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const accordionId = urlParams.get('accordion') || window.location.hash.substring(1);

    if (accordionId) {
        // Wait for DOM to be fully loaded
        setTimeout(() => {
            const accordionItem = document.querySelector(`[data-accordion="${accordionId}"]`);
            if (accordionItem) {
                // Open the accordion
                accordionItem.classList.add('active');

                // Scroll to the accordion smoothly
                setTimeout(() => {
                    accordionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        }, 100);
    }
}

// Make function globally available
window.toggleAccordion = toggleAccordion;

// Share Accordion Function
function shareAccordion(event, accordionId) {
    // Prevent accordion from toggling when clicking share button
    event.stopPropagation();

    // Create URL with accordion state
    const url = new URL(window.location.href);
    url.searchParams.set('accordion', accordionId);
    url.hash = accordionId;

    // Copy to clipboard
    navigator.clipboard.writeText(url.toString()).then(() => {
        // Visual feedback
        const shareButton = event.currentTarget;
        const tooltip = shareButton.querySelector('.share-tooltip');
        const originalText = tooltip.textContent;

        shareButton.classList.add('copied');
        tooltip.textContent = 'Link copiado!';

        setTimeout(() => {
            shareButton.classList.remove('copied');
            tooltip.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar link:', err);
        alert('Não foi possível copiar o link. Tente novamente.');
    });
}

window.shareAccordion = shareAccordion;

// Scroll Functions
function scrollToAccordions() {
    const accordionsSection = document.getElementById('accordions');
    if (accordionsSection) {
        accordionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

window.scrollToAccordions = scrollToAccordions;

// Function to change language via select
function changeLanguage(lang) {
    setLanguage(lang);
}

window.changeLanguage = changeLanguage;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLanguage);

    // Update select with current language
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }

    // Load state from URL (deep linking)
    loadStateFromURL();

    // Add keyboard navigation for accordions
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.setAttribute('tabindex', '0');
        header.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const accordionId = header.parentElement.getAttribute('data-accordion');
                toggleAccordion(accordionId);
            }
        });
    });

    // Back to top button functionality
    // const backToTopButton = document.querySelector('.back-to-top');

    // if (backToTopButton) {
    //     // Show/hide button based on scroll position
    //     window.addEventListener('scroll', () => {
    //         if (window.pageYOffset > 300) {
    //             backToTopButton.classList.add('active');
    //         } else {
    //             backToTopButton.classList.remove('active');
    //         }
    //     });

    //     // Smooth scroll to top on click
    //     backToTopButton.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     });
    // }
});

// Export for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        setLanguage,
        toggleAccordion,
        scrollToAccordions
    };
}
