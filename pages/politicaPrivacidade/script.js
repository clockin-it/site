const translations = {
    pt: {
        // Hero Section
        "hero.title": "Política de Privacidade <span class=\"highlight\">ClockIn.IT REP-P</span>",
        "hero.subtitle": "Compromisso com a segurança e privacidade dos seus dados",
        "hero.updated": "Última atualização: Dezembro de 2025",
        "hero.compliance": "Em conformidade com LGPD",

        // Content
        "content.intro": "A <strong>ClockInIT</strong> compromete-se com a segurança e privacidade dos dados de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso sistema de Registro Eletrônico de Ponto via Programa (REP-P).",

        // Section 1
        "sec1.title": "1. DEFINIÇÕES IMPORTANTES",
        "sec1.intro": "Para facilitar o entendimento desta Política, adotamos as seguintes definições, em consonância com a legislação aplicável:",
        "sec1.lgpd": "1.1 LGPD:",
        "sec1.lgpd_desc": "Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
        "sec1.personal_data": "1.2 Dado Pessoal:",
        "sec1.personal_data_desc": "Qualquer informação relacionada a pessoa natural identificada ou identificável (ex: nome, CPF, e-mail, biometria).",
        "sec1.controller": "1.3 Controlador:",
        "sec1.controller_desc": "Pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais. No contexto do ClockInIT, o <strong>Controlador é o seu Empregador (Empresa Cliente)</strong>.",
        "sec1.operator": "1.4 Operador:",
        "sec1.operator_desc": "Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador. No caso, a <strong>ClockInIT</strong>.",
        "sec1.processing": "1.5 Tratamento:",
        "sec1.processing_desc": "Toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação.",

        // Section 2
        "sec2.title": "2. DADOS COLETADOS",
        "sec2.intro": "Coletamos os dados estritamente necessários para a prestação dos serviços de registro de ponto e gestão de jornada, conforme as instruções e finalidades definidas pelo Controlador (seu Empregador).",
        "sec2.direct_title": "2.1 Dados Fornecidos Diretamente",
        "sec2.direct_desc": "São os dados cadastrais fornecidos pelo Empregador ou pelo próprio Colaborador:",
        "sec2.identification": "Identificação:",
        "sec2.identification_desc": "Nome completo, CPF, matrícula funcional, data de nascimento.",
        "sec2.contact": "Contato:",
        "sec2.contact_desc": "Endereço de e-mail e número de telefone (corporativo ou pessoal).",
        "sec2.professional": "Dados Profissionais:",
        "sec2.professional_desc": "Cargo, setor, dados do contrato de trabalho, jornada cadastrada.",
        "sec2.auto_title": "2.2 Dados Coletados Automaticamente (Uso do Sistema)",
        "sec2.auto_desc": "São dados gerados durante a utilização do sistema REP-P:",
        "sec2.records": "Registros de Ponto:",
        "sec2.records_desc": "Horários de entrada e saída, datas, justificativas, abonos e assinatura eletrônica.",
        "sec2.geolocation": "Geolocalização:",
        "sec2.geolocation_desc": "Coordenadas (latitude/longitude) no momento da marcação, coletadas apenas quando exigido pelo Empregador, em conformidade com o Art. 77 da Portaria 671/2021.",
        "sec2.device": "Dados do Dispositivo:",
        "sec2.device_desc": "Endereço IP, modelo do aparelho, sistema operacional, versão do aplicativo, ID do dispositivo (utilizados para auditoria, segurança e prevenção a fraudes).",
        "sec2.cookies": "Cookies e Tecnologias de Rastreamento:",
        "sec2.cookies_desc": "Em nossa versão web, utilizamos cookies técnicos essenciais para a gestão de sessão segura e o funcionamento adequado do sistema.",
        "sec2.sensitive_title": "2.3 Dados Sensíveis (Biometria)",
        "sec2.sensitive_alert": "Importante sobre Biometria",
        "sec2.sensitive_desc": "Caso o Empregador opte pela funcionalidade de reconhecimento facial para autenticação do ponto, a ClockInIT coletará e armazenará a imagem de sua face ou os dados biométricos derivados. O tratamento desses dados sensíveis é realizado com a finalidade específica de <strong>prevenção à fraude e garantia da segurança do processo de registro de ponto</strong>, conforme previsto na LGPD.",

        // Section 3 - Table
        "sec3.title": "3. FINALIDADE E BASE LEGAL DO TRATAMENTO",
        "sec3.intro": "O tratamento dos seus dados pessoais é realizado sempre fundamentado em uma base legal prevista na LGPD, conforme detalhado abaixo:",
        "table.purpose": "Finalidade",
        "table.legal_basis": "Base Legal (LGPD)",
        "table.row1_purpose": "Registro de Ponto Eletrônico",
        "table.row1_desc": "Cumprir as exigências da Portaria 671/2021 e CLT para controle de jornada.",
        "table.row1_legal": "Cumprimento de Obrigação Legal (Art. 7º, II) e Execução de Contrato (Art. 7º, V)",
        "table.row2_purpose": "Identificação e Autenticação",
        "table.row2_desc": "Garantir que quem está registrando o ponto é realmente o colaborador.",
        "table.row2_legal": "Prevenção à Fraude e Segurança (Art. 11, II, g) e Legítimo Interesse",
        "table.row3_purpose": "Auditoria e Fiscalização",
        "table.row3_desc": "Geração de Arquivo Fonte de Dados (AFD) e Comprovantes para o Ministério do Trabalho.",
        "table.row3_legal": "Cumprimento de Obrigação Legal (Art. 7º, II)",
        "table.row4_purpose": "Suporte Técnico",
        "table.row4_desc": "Resolver problemas de acesso ou erros na plataforma.",
        "table.row4_legal": "Execução de Contrato (Art. 7º, V)",
        "table.row5_purpose": "Melhoria do Serviço",
        "table.row5_desc": "Análise de erros e performance do aplicativo.",
        "table.row5_legal": "Legítimo Interesse (Art. 7º, IX)",

        // Section 4
        "sec4.title": "4. COMPARTILHAMENTO DE DADOS",
        "sec4.intro": "A ClockInIT atua como Operadora e não comercializa seus dados pessoais. O compartilhamento de dados ocorre estritamente nas seguintes situações:",
        "sec4.employer": "Com o Empregador (Controlador):",
        "sec4.employer_desc": "Para a gestão da folha de pagamento, banco de horas, fiscalização interna e cumprimento das obrigações trabalhistas.",
        "sec4.authorities": "Autoridades Governamentais:",
        "sec4.authorities_desc": "Compartilhamento obrigatório com o Ministério do Trabalho, Receita Federal (eSocial) e Justiça do Trabalho, quando exigido por lei.",
        "sec4.partners": "Parceiros de Infraestrutura:",
        "sec4.partners_desc": "Provedores de hospedagem em nuvem (ex: AWS, Google Cloud) que garantem a alta disponibilidade e segurança dos dados.",

        // Section 5
        "sec5.title": "5. ARMAZENAMENTO E RETENÇÃO",
        "sec5.storage": "Seus dados são armazenados em servidores seguros, que podem estar localizados no Brasil ou no exterior. Nesses casos, garantimos que a transferência ocorra apenas para países que proporcionem grau de proteção de dados adequado.",
        "sec5.retention_title": "Período de Retenção:",
        "sec5.retention_desc": "Os dados de registro de ponto possuem prazos de guarda definidos pela legislação trabalhista e fiscal, que geralmente se estendem por 5 (cinco) anos ou mais. Mesmo após o desligamento do Colaborador da empresa, esses registros são mantidos para o cumprimento dessas obrigações legais.",

        // Section 6
        "sec6.title": "6. SEGURANÇA DA INFORMAÇÃO",
        "sec6.intro": "A ClockInIT adota as melhores práticas de segurança da informação do mercado para proteger os dados pessoais tratados, incluindo:",
        "sec6.encryption": "Criptografia de dados em trânsito (TLS/SSL) e em repouso.",
        "sec6.access": "Controles de acesso restritos, garantindo que apenas pessoal autorizado tenha acesso aos dados.",
        "sec6.monitoring": "Monitoramento contínuo de vulnerabilidades e implementação de correções imediatas.",
        "sec6.backup": "Backups frequentes para garantir a disponibilidade e recuperação dos dados.",
        "sec6.signature": "Assinatura digital dos registros de ponto para garantir sua integridade, autenticidade e não-repúdio.",

        // Section 7
        "sec7.title": "7. SEUS DIREITOS (TITULAR DOS DADOS)",
        "sec7.intro": "O Colaborador, na qualidade de Titular dos Dados, pode exercer os direitos previstos na LGPD perante o <strong>Controlador (seu Empregador)</strong> ou, quando aplicável, junto à ClockInIT. Os principais direitos incluem:",
        "sec7.access": "Confirmação e Acesso:",
        "sec7.access_desc": "Obter a confirmação da existência de tratamento e o acesso aos seus dados.",
        "sec7.correction": "Correção:",
        "sec7.correction_desc": "Solicitar a correção de dados cadastrais incompletos, inexatos ou desatualizados.",
        "sec7.deletion": "Anonimização, Bloqueio ou Eliminação:",
        "sec7.deletion_desc": "Solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a lei.",
        "sec7.information": "Informação:",
        "sec7.information_desc": "Ser informado sobre as entidades públicas e privadas com as quais seus dados são compartilhados.",

        // Section 8
        "sec8.title": "8. ALTERAÇÕES NESTA POLÍTICA",
        "sec8.desc": "A ClockInIT reserva-se o direito de atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível na plataforma. O uso continuado do serviço após a publicação de alterações implica a ciência e aceitação das novas condições.",

        // Contact
        "contact.title": "9. CONTATO",
        "contact.intro": "Para questões diretas com a ClockInIT (Operador), utilize os seguintes canais:",
        "contact.email": "E-mail:",
        "contact.address": "Endereço:",
        "contact.address_full": "DOUTOR SERGIO DE JESUS HERMINIO, 157, JARDINS DE MONET, Marília - SP, CEP 17516-806",
        "contact.company": "Razão Social:",
        "contact.cnpj": "CNPJ:",

        // CTA
        "cta.title": "Dúvidas sobre Privacidade?",
        "cta.description": "Nossa equipe está pronta para esclarecer qualquer questão sobre o tratamento de seus dados",
        "cta.btn_contact": "Entrar em Contato",
        "cta.btn_home": "Voltar a Página Inicial",

        // Footer
        "footer.copyright": "© 2026 ClockIn.IT. Todos os direitos reservados.",
        "footer.privacy": "Política de Privacidade ",
        "footer.terms": "Termos de Uso",
        "footer.tutorial": "Guia"
    },

    en: {
        // Hero Section
        "hero.title": "Privacy Policy <span class=\"highlight\">ClockIn.IT REP-P</span>",
        "hero.subtitle": "Commitment to the security and privacy of your data",
        "hero.updated": "Last updated: December 2025",
        "hero.compliance": "LGPD Compliant",

        // Content
        "content.intro": "<strong>ClockInIT</strong> is committed to the security and privacy of its users' data. This Privacy Policy describes how we collect, use, store, and protect your personal information when using our Electronic Time Recording via Program (REP-P) system.",

        // Section 1
        "sec1.title": "1. IMPORTANT DEFINITIONS",
        "sec1.intro": "To facilitate understanding of this Policy, we adopt the following definitions, in accordance with applicable legislation:",
        "sec1.lgpd": "1.1 LGPD:",
        "sec1.lgpd_desc": "General Data Protection Law (Law No. 13.709/2018).",
        "sec1.personal_data": "1.2 Personal Data:",
        "sec1.personal_data_desc": "Any information related to an identified or identifiable natural person (e.g.: name, CPF, email, biometrics).",
        "sec1.controller": "1.3 Controller:",
        "sec1.controller_desc": "Natural or legal person to whom decisions regarding the processing of personal data belong. In the context of ClockInIT, the <strong>Controller is your Employer (Client Company)</strong>.",
        "sec1.operator": "1.4 Operator:",
        "sec1.operator_desc": "Natural or legal person that processes personal data on behalf of the controller. In this case, <strong>ClockInIT</strong>.",
        "sec1.processing": "1.5 Processing:",
        "sec1.processing_desc": "Any operation performed with personal data, such as collection, production, reception, classification, use, access, reproduction, transmission, distribution, processing, archiving, storage, elimination, evaluation or control of information.",

        // Section 2
        "sec2.title": "2. DATA COLLECTED",
        "sec2.intro": "We collect only the data strictly necessary for providing time registration and workday management services, according to instructions and purposes defined by the Controller (your Employer).",
        "sec2.direct_title": "2.1 Directly Provided Data",
        "sec2.direct_desc": "Registration data provided by the Employer or by the Employee themselves:",
        "sec2.identification": "Identification:",
        "sec2.identification_desc": "Full name, CPF, employee ID, date of birth.",
        "sec2.contact": "Contact:",
        "sec2.contact_desc": "Email address and phone number (corporate or personal).",
        "sec2.professional": "Professional Data:",
        "sec2.professional_desc": "Position, department, employment contract data, registered workday.",
        "sec2.auto_title": "2.2 Automatically Collected Data (System Usage)",
        "sec2.auto_desc": "Data generated during use of the REP-P system:",
        "sec2.records": "Time Records:",
        "sec2.records_desc": "Clock in/out times, dates, justifications, absences and electronic signature.",
        "sec2.geolocation": "Geolocation:",
        "sec2.geolocation_desc": "Coordinates (latitude/longitude) at the time of marking, collected only when required by the Employer, in accordance with Art. 77 of Ordinance 671/2021.",
        "sec2.device": "Device Data:",
        "sec2.device_desc": "IP address, device model, operating system, app version, device ID (used for auditing, security and fraud prevention).",
        "sec2.cookies": "Cookies and Tracking Technologies:",
        "sec2.cookies_desc": "In our web version, we use essential technical cookies for secure session management and proper system operation.",
        "sec2.sensitive_title": "2.3 Sensitive Data (Biometrics)",
        "sec2.sensitive_alert": "Important about Biometrics",
        "sec2.sensitive_desc": "If the Employer opts for facial recognition functionality for time authentication, ClockInIT will collect and store your face image or derived biometric data. The processing of this sensitive data is carried out for the specific purpose of <strong>fraud prevention and ensuring the security of the time registration process</strong>, as provided for in LGPD.",

        // Section 3 - Table
        "sec3.title": "3. PURPOSE AND LEGAL BASIS FOR PROCESSING",
        "sec3.intro": "The processing of your personal data is always based on a legal basis provided for in LGPD, as detailed below:",
        "table.purpose": "Purpose",
        "table.legal_basis": "Legal Basis (LGPD)",
        "table.row1_purpose": "Electronic Time Recording",
        "table.row1_desc": "Comply with requirements of Ordinance 671/2021 and CLT for workday control.",
        "table.row1_legal": "Legal Obligation Compliance (Art. 7, II) and Contract Execution (Art. 7, V)",
        "table.row2_purpose": "Identification and Authentication",
        "table.row2_desc": "Ensure that the person clocking in is actually the employee.",
        "table.row2_legal": "Fraud Prevention and Security (Art. 11, II, g) and Legitimate Interest",
        "table.row3_purpose": "Audit and Inspection",
        "table.row3_desc": "Generation of Source Data File (AFD) and Receipts for the Ministry of Labor.",
        "table.row3_legal": "Legal Obligation Compliance (Art. 7, II)",
        "table.row4_purpose": "Technical Support",
        "table.row4_desc": "Resolve access problems or platform errors.",
        "table.row4_legal": "Contract Execution (Art. 7, V)",
        "table.row5_purpose": "Service Improvement",
        "table.row5_desc": "Analysis of errors and application performance.",
        "table.row5_legal": "Legitimate Interest (Art. 7, IX)",

        // Section 4
        "sec4.title": "4. DATA SHARING",
        "sec4.intro": "ClockInIT acts as an Operator and does not sell your personal data. Data sharing occurs strictly in the following situations:",
        "sec4.employer": "With the Employer (Controller):",
        "sec4.employer_desc": "For payroll management, time bank, internal inspection and compliance with labor obligations.",
        "sec4.authorities": "Government Authorities:",
        "sec4.authorities_desc": "Mandatory sharing with the Ministry of Labor, Federal Revenue (eSocial) and Labor Court, when required by law.",
        "sec4.partners": "Infrastructure Partners:",
        "sec4.partners_desc": "Cloud hosting providers (e.g.: AWS, Google Cloud) that ensure high availability and data security.",

        // Section 5
        "sec5.title": "5. STORAGE AND RETENTION",
        "sec5.storage": "Your data is stored on secure servers, which may be located in Brazil or abroad. In these cases, we ensure that the transfer occurs only to countries that provide an adequate level of data protection.",
        "sec5.retention_title": "Retention Period:",
        "sec5.retention_desc": "Time record data has retention periods defined by labor and tax legislation, which generally extend for 5 (five) years or more. Even after the Employee's termination from the company, these records are maintained to comply with these legal obligations.",

        // Section 6
        "sec6.title": "6. INFORMATION SECURITY",
        "sec6.intro": "ClockInIT adopts the best information security practices on the market to protect the processed personal data, including:",
        "sec6.encryption": "Data encryption in transit (TLS/SSL) and at rest.",
        "sec6.access": "Restricted access controls, ensuring that only authorized personnel have access to the data.",
        "sec6.monitoring": "Continuous monitoring of vulnerabilities and implementation of immediate corrections.",
        "sec6.backup": "Frequent backups to ensure data availability and recovery.",
        "sec6.signature": "Digital signature of time records to ensure their integrity, authenticity and non-repudiation.",

        // Section 7
        "sec7.title": "7. YOUR RIGHTS (DATA SUBJECT)",
        "sec7.intro": "The Employee, as Data Subject, can exercise the rights provided for in LGPD before the <strong>Controller (your Employer)</strong> or, when applicable, with ClockInIT. The main rights include:",
        "sec7.access": "Confirmation and Access:",
        "sec7.access_desc": "Obtain confirmation of the existence of processing and access to your data.",
        "sec7.correction": "Correction:",
        "sec7.correction_desc": "Request correction of incomplete, inaccurate or outdated registration data.",
        "sec7.deletion": "Anonymization, Blocking or Elimination:",
        "sec7.deletion_desc": "Request deletion of unnecessary data or data processed in non-compliance with the law.",
        "sec7.information": "Information:",
        "sec7.information_desc": "Be informed about public and private entities with which your data is shared.",

        // Section 8
        "sec8.title": "8. CHANGES TO THIS POLICY",
        "sec8.desc": "ClockInIT reserves the right to update this Privacy Policy periodically. The most recent version will always be available on the platform. Continued use of the service after publication of changes implies awareness and acceptance of the new conditions.",

        // Contact
        "contact.title": "9. CONTACT",
        "contact.intro": "For direct questions with ClockInIT (Operator), use the following channels:",
        "contact.email": "Email:",
        "contact.address": "Address:",
        "contact.address_full": "DOUTOR SERGIO DE JESUS HERMINIO, 157, JARDINS DE MONET, Marília - SP, ZIP 17516-806",
        "contact.company": "Company Name:",
        "contact.cnpj": "CNPJ:",

        // CTA
        "cta.title": "Questions about Privacy?",
        "cta.description": "Our team is ready to clarify any questions about the processing of your data",
        "cta.btn_contact": "Get in Touch",
        "cta.btn_home": "Back to Home Page",

        // Footer
        "footer.copyright": "© 2026 ClockIn.IT. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Use",
        "footer.tutorial": "Guide"
    },

    es: {
        // Hero Section
        "hero.title": "Política de Privacidad <span class=\"highlight\">ClockIn.IT REP-P</span>",
        "hero.subtitle": "Compromiso con la seguridad y privacidad de sus datos",
        "hero.updated": "Última actualización: Diciembre de 2025",
        "hero.compliance": "En cumplimiento con LGPD",

        // Content
        "content.intro": "<strong>ClockInIT</strong> se compromete con la seguridad y privacidad de los datos de sus usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal al utilizar nuestro sistema de Registro Electrónico de Tiempo vía Programa (REP-P).",

        // Section 1
        "sec1.title": "1. DEFINICIONES IMPORTANTES",
        "sec1.intro": "Para facilitar la comprensión de esta Política, adoptamos las siguientes definiciones, de acuerdo con la legislación aplicable:",
        "sec1.lgpd": "1.1 LGPD:",
        "sec1.lgpd_desc": "Ley General de Protección de Datos (Ley nº 13.709/2018).",
        "sec1.personal_data": "1.2 Dato Personal:",
        "sec1.personal_data_desc": "Cualquier información relacionada con una persona natural identificada o identificable (ej: nombre, CPF, email, biometría).",
        "sec1.controller": "1.3 Controlador:",
        "sec1.controller_desc": "Persona natural o jurídica a quien competen las decisiones referentes al tratamiento de datos personales. En el contexto de ClockInIT, el <strong>Controlador es su Empleador (Empresa Cliente)</strong>.",
        "sec1.operator": "1.4 Operador:",
        "sec1.operator_desc": "Persona natural o jurídica que realiza el tratamiento de datos personales en nombre del controlador. En este caso, <strong>ClockInIT</strong>.",
        "sec1.processing": "1.5 Tratamiento:",
        "sec1.processing_desc": "Toda operación realizada con datos personales, como recopilación, producción, recepción, clasificación, utilización, acceso, reproducción, transmisión, distribución, procesamiento, archivo, almacenamiento, eliminación, evaluación o control de la información.",

        // Section 2
        "sec2.title": "2. DATOS RECOPILADOS",
        "sec2.intro": "Recopilamos solo los datos estrictamente necesarios para la prestación de servicios de registro de tiempo y gestión de jornada, según las instrucciones y propósitos definidos por el Controlador (su Empleador).",
        "sec2.direct_title": "2.1 Datos Proporcionados Directamente",
        "sec2.direct_desc": "Son los datos de registro proporcionados por el Empleador o por el propio Colaborador:",
        "sec2.identification": "Identificación:",
        "sec2.identification_desc": "Nombre completo, CPF, matrícula funcional, fecha de nacimiento.",
        "sec2.contact": "Contacto:",
        "sec2.contact_desc": "Dirección de correo electrónico y número de teléfono (corporativo o personal).",
        "sec2.professional": "Datos Profesionales:",
        "sec2.professional_desc": "Cargo, sector, datos del contrato de trabajo, jornada registrada.",
        "sec2.auto_title": "2.2 Datos Recopilados Automáticamente (Uso del Sistema)",
        "sec2.auto_desc": "Son datos generados durante el uso del sistema REP-P:",
        "sec2.records": "Registros de Tiempo:",
        "sec2.records_desc": "Horarios de entrada y salida, fechas, justificaciones, ausencias y firma electrónica.",
        "sec2.geolocation": "Geolocalización:",
        "sec2.geolocation_desc": "Coordenadas (latitud/longitud) en el momento del registro, recopiladas solo cuando es requerido por el Empleador, de acuerdo con el Art. 77 de la Ordenanza 671/2021.",
        "sec2.device": "Datos del Dispositivo:",
        "sec2.device_desc": "Dirección IP, modelo del dispositivo, sistema operativo, versión de la aplicación, ID del dispositivo (utilizados para auditoría, seguridad y prevención de fraude).",
        "sec2.cookies": "Cookies y Tecnologías de Rastreo:",
        "sec2.cookies_desc": "En nuestra versión web, utilizamos cookies técnicas esenciales para la gestión de sesión segura y el funcionamiento adecuado del sistema.",
        "sec2.sensitive_title": "2.3 Datos Sensibles (Biometría)",
        "sec2.sensitive_alert": "Importante sobre Biometría",
        "sec2.sensitive_desc": "Si el Empleador opta por la funcionalidad de reconocimiento facial para autenticación del registro de tiempo, ClockInIT recopilará y almacenará la imagen de su rostro o los datos biométricos derivados. El tratamiento de estos datos sensibles se realiza con el propósito específico de <strong>prevención de fraude y garantía de la seguridad del proceso de registro de tiempo</strong>, según lo previsto en LGPD.",

        // Section 3 - Table
        "sec3.title": "3. FINALIDAD Y BASE LEGAL DEL TRATAMIENTO",
        "sec3.intro": "El tratamiento de sus datos personales se realiza siempre fundamentado en una base legal prevista en LGPD, como se detalla a continuación:",
        "table.purpose": "Finalidad",
        "table.legal_basis": "Base Legal (LGPD)",
        "table.row1_purpose": "Registro de Tiempo Electrónico",
        "table.row1_desc": "Cumplir con los requisitos de la Ordenanza 671/2021 y CLT para el control de jornada.",
        "table.row1_legal": "Cumplimiento de Obligación Legal (Art. 7, II) y Ejecución de Contrato (Art. 7, V)",
        "table.row2_purpose": "Identificación y Autenticación",
        "table.row2_desc": "Garantizar que quien está registrando el tiempo es realmente el colaborador.",
        "table.row2_legal": "Prevención de Fraude y Seguridad (Art. 11, II, g) e Interés Legítimo",
        "table.row3_purpose": "Auditoría e Inspección",
        "table.row3_desc": "Generación de Archivo Fuente de Datos (AFD) y Comprobantes para el Ministerio de Trabajo.",
        "table.row3_legal": "Cumplimiento de Obligación Legal (Art. 7, II)",
        "table.row4_purpose": "Soporte Técnico",
        "table.row4_desc": "Resolver problemas de acceso o errores en la plataforma.",
        "table.row4_legal": "Ejecución de Contrato (Art. 7, V)",
        "table.row5_purpose": "Mejora del Servicio",
        "table.row5_desc": "Análisis de errores y rendimiento de la aplicación.",
        "table.row5_legal": "Interés Legítimo (Art. 7, IX)",

        // Section 4
        "sec4.title": "4. COMPARTIR DATOS",
        "sec4.intro": "ClockInIT actúa como Operador y no comercializa sus datos personales. El compartir datos ocurre estrictamente en las siguientes situaciones:",
        "sec4.employer": "Con el Empleador (Controlador):",
        "sec4.employer_desc": "Para la gestión de nómina, banco de horas, inspección interna y cumplimiento de obligaciones laborales.",
        "sec4.authorities": "Autoridades Gubernamentales:",
        "sec4.authorities_desc": "Compartir obligatorio con el Ministerio de Trabajo, Hacienda Federal (eSocial) y Justicia del Trabajo, cuando sea requerido por ley.",
        "sec4.partners": "Socios de Infraestructura:",
        "sec4.partners_desc": "Proveedores de alojamiento en la nube (ej: AWS, Google Cloud) que garantizan alta disponibilidad y seguridad de los datos.",

        // Section 5
        "sec5.title": "5. ALMACENAMIENTO Y RETENCIÓN",
        "sec5.storage": "Sus datos se almacenan en servidores seguros, que pueden estar ubicados en Brasil o en el extranjero. En estos casos, garantizamos que la transferencia ocurra solo a países que proporcionen un grado adecuado de protección de datos.",
        "sec5.retention_title": "Período de Retención:",
        "sec5.retention_desc": "Los datos de registro de tiempo tienen períodos de retención definidos por la legislación laboral y fiscal, que generalmente se extienden por 5 (cinco) años o más. Incluso después de la terminación del Colaborador de la empresa, estos registros se mantienen para el cumplimiento de estas obligaciones legales.",

        // Section 6
        "sec6.title": "6. SEGURIDAD DE LA INFORMACIÓN",
        "sec6.intro": "ClockInIT adopta las mejores prácticas de seguridad de la información del mercado para proteger los datos personales tratados, incluyendo:",
        "sec6.encryption": "Cifrado de datos en tránsito (TLS/SSL) y en reposo.",
        "sec6.access": "Controles de acceso restringidos, garantizando que solo el personal autorizado tenga acceso a los datos.",
        "sec6.monitoring": "Monitoreo continuo de vulnerabilidades e implementación de correcciones inmediatas.",
        "sec6.backup": "Copias de seguridad frecuentes para garantizar la disponibilidad y recuperación de datos.",
        "sec6.signature": "Firma digital de los registros de tiempo para garantizar su integridad, autenticidad y no repudio.",

        // Section 7
        "sec7.title": "7. SUS DERECHOS (TITULAR DE LOS DATOS)",
        "sec7.intro": "El Colaborador, como Titular de los Datos, puede ejercer los derechos previstos en LGPD ante el <strong>Controlador (su Empleador)</strong> o, cuando sea aplicable, con ClockInIT. Los principales derechos incluyen:",
        "sec7.access": "Confirmación y Acceso:",
        "sec7.access_desc": "Obtener la confirmación de la existencia de tratamiento y el acceso a sus datos.",
        "sec7.correction": "Corrección:",
        "sec7.correction_desc": "Solicitar la corrección de datos de registro incompletos, inexactos o desactualizados.",
        "sec7.deletion": "Anonimización, Bloqueo o Eliminación:",
        "sec7.deletion_desc": "Solicitar la eliminación de datos innecesarios o tratados en incumplimiento con la ley.",
        "sec7.information": "Información:",
        "sec7.information_desc": "Ser informado sobre las entidades públicas y privadas con las que se comparten sus datos.",

        // Section 8
        "sec8.title": "8. CAMBIOS EN ESTA POLÍTICA",
        "sec8.desc": "ClockInIT se reserva el derecho de actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre disponible en la plataforma. El uso continuado del servicio después de la publicación de cambios implica el conocimiento y aceptación de las nuevas condiciones.",

        // Contact
        "contact.title": "9. CONTACTO",
        "contact.intro": "Para preguntas directas con ClockInIT (Operador), utilice los siguientes canales:",
        "contact.email": "Correo electrónico:",
        "contact.address": "Dirección:",
        "contact.address_full": "DOUTOR SERGIO DE JESUS HERMINIO, 157, JARDINS DE MONET, Marília - SP, CEP 17516-806",
        "contact.company": "Razón Social:",
        "contact.cnpj": "CNPJ:",

        // CTA
        "cta.title": "¿Dudas sobre Privacidad?",
        "cta.description": "Nuestro equipo está listo para aclarar cualquier pregunta sobre el tratamiento de sus datos",
        "cta.btn_contact": "Ponerse en Contacto",
        "cta.btn_home": "Volver a la Página Inicial",

        // Footer
        "footer.copyright": "© 2026 ClockIn.IT. Todos los derechos reservados.",
        "footer.privacy": "Política de Privacidad ",
        "footer.terms": "Términos de Uso",
        "footer.tutorial": "Guía"
    }
};

// Current language state
let currentLang = localStorage.getItem('clockinit_lang') || 'pt';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initLanguageButtons();
    initBackToTop();
});

// Initialize language from localStorage or default to PT
function initLanguage() {
    const savedLang = localStorage.getItem('clockinit_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    // Update active button state
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateLanguage(currentLang);
}

// Initialize language selector buttons
function initLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                currentLang = lang;
                localStorage.setItem('clockinit_lang', lang);
                updateLanguage(lang);

                // Update active state
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Update page content with translations
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update document language attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en' : 'es';

    // Update page title
    const titles = {
        pt: 'Política de Privacidade - ClockIn.IT',
        en: 'Privacy Policy - ClockIn.IT',
        es: 'Política de Privacidad - ClockIn.IT'
    };
    document.title = titles[lang];
}

// Back to top button functionality
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
