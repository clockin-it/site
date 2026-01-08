const translations = {
    pt: {
        // Hero Section
        "hero.title": "Política de Privacidade <span class=\"highlight\">ClockIn.IT REP-P</span>",
        "hero.subtitle": "Compromisso com a segurança e privacidade dos seus dados",
        "hero.updated": "Última atualização: Janeiro de 2026",
        "hero.compliance": "Em conformidade com LGPD",

        // Content
        "content.intro": "A <strong>ClockInIT</strong> compromete-se com a segurança e privacidade dos dados de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso sistema de Registro Eletrônico de Ponto via Programa (REP-P).",
        "content.compliance": "Esta política foi elaborada em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - <strong>LGPD</strong>) e a Portaria nº 671/2021 do Ministério do Trabalho e Previdência (MTP), refletindo nosso compromisso com a transparência e a legalidade.",

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
        "sec1.dpo": "1.6 Encarregado de Dados (DPO):",
        "sec1.dpo_desc": "Pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).",

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
        "sec2.geolocation_desc": "Coordenadas (latitude/longitude) no momento da marcação, coletadas apenas quando exigido pelo Empregador, em conformidade com o Art. 77 da Portaria 671/2021. O acesso à localização exata é utilizado para registrar o local da marcação.",
        "sec2.device": "Dados do Dispositivo:",
        "sec2.device_desc": "Endereço IP, modelo do aparelho, sistema operacional, versão do aplicativo, ID do dispositivo (utilizados para auditoria, segurança e prevenção a fraudes e para garantir o funcionamento adequado da aplicação em diversos dispositivos).",
        "sec2.cookies": "Cookies e Tecnologias de Rastreamento:",
        "sec2.cookies_desc": "Em nossa versão web, utilizamos cookies técnicos essenciais para a gestão de sessão segura e o funcionamento adequado do sistema.",
        "sec2.sensitive_title": "2.3 Dados Sensíveis (Biometria)",
        "sec2.sensitive_alert": "Importante sobre Biometria",
        "sec2.sensitive_desc": "Caso o Empregador opte pela funcionalidade de reconhecimento facial para autenticação do ponto, a ClockInIT coletará e armazenará a imagem de sua face ou os dados biométricos derivados. O tratamento desses dados sensíveis é realizado com base na finalidade específica de <strong>prevenção à fraude e garantia da segurança do processo de registro de ponto</strong>, conforme previsto na LGPD. O acesso à câmera é utilizado para a captura de fotos para o reconhecimento facial e para registros de ponto com foto.",

        // Section 3 - Table
        "sec3.title": "3. FINALIDADE E BASE LEGAL DO TRATAMENTO",
        "sec3.intro": "O tratamento dos seus dados pessoais é realizado sempre fundamentado em uma base legal prevista na LGPD, conforme detalhado na Tabela 1.",
        "sec3.table_title": "Tabela 1 – Finalidade e Base Legal do Tratamento de Dados",
        "table.purpose": "Finalidade",
        "table.legal_basis": "Base Legal (LGPD)",
        "table.row1_purpose": "Registro de Ponto Eletrônico",
        "table.row1_desc": "Cumprir as exigências da Portaria 671/2021 e CLT para controle de jornada.",
        "table.row1_legal": "Cumprimento de Obrigação Legal (Art. 7º, II) e Execução de Contrato (Art. 7º, V)",
        "table.row2_purpose": "Identificação e Autenticação",
        "table.row2_desc": "Garantir que quem está registrando o ponto é realmente o colaborador (login, biometria).",
        "table.row2_legal": "Prevenção à Fraude e Segurança (Art. 11, II, g) e Legítimo Interesse. Nota: O tratamento de dados sensíveis (biometria) é realizado com base no consentimento do titular (Art. 11, I) ou para prevenção à fraude (Art. 11, II, g).",
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
        "sec4.intro": "A ClockInIT atua como Operadora e não comercializa seus dados pessoais. O compartilhamento de dados ocorre estritamente nas seguintes situações e para as finalidades específicas. Não compartilhamos dados com terceiros não listados abaixo.",
        "sec4.employer": "Com o Empregador (Controlador):",
        "sec4.employer_desc": "Para a gestão da folha de pagamento, banco de horas, fiscalização interna e cumprimento das obrigações trabalhistas.",
        "sec4.authorities": "Autoridades Governamentais:",
        "sec4.authorities_desc": "Compartilhamento obrigatório com o Ministério do Trabalho, Receita Federal (eSocial) e Justiça do Trabalho, quando exigido por lei, regulamento ou ordem judicial.",
        "sec4.partners": "Parceiros de Infraestrutura:",
        "sec4.partners_desc": "Provedores de hospedagem em nuvem (ex: AWS, Google Cloud) que garantem a alta disponibilidade e segurança dos dados. Estes parceiros operam sob rigorosos contratos de confidencialidade e segurança, atuando como suboperadores.",

        // Section 5
        "sec5.title": "5. COOKIES",
        "sec5.intro": "Utilizamos cookies e tecnologias similares exclusivamente para o funcionamento essencial do sistema REP-P:",
        "sec5.authentication": "Autenticação:",
        "sec5.authentication_desc": "Manter o Colaborador logado durante a navegação.",
        "sec5.security": "Segurança:",
        "sec5.security_desc": "Detectar e prevenir acessos suspeitos ou não autorizados.",
        "sec5.performance": "Performance:",
        "sec5.performance_desc": "Monitorar o desempenho técnico da aplicação.",
        "sec5.config": "O Colaborador pode configurar seu navegador para recusar cookies, contudo, ressaltamos que isso pode comprometer o funcionamento correto e a segurança do sistema de registro de ponto.",

        // Section 6
        "sec6.title": "6. ARMAZENAMENTO E RETENÇÃO",
        "sec6.storage": "Seus dados são armazenados em servidores seguros, que podem estar localizados no Brasil ou no exterior (transferência internacional de dados). Nesses casos, garantimos que a transferência ocorra apenas para países que proporcionem grau de proteção de dados adequado ou mediante a adoção de cláusulas contratuais específicas, em conformidade com a LGPD. Adotamos medidas técnicas e organizacionais avançadas, como criptografia em trânsito e em repouso, para garantir a segurança.",
        "sec6.retention_title": "Período de Retenção:",
        "sec6.retention_desc": "Os dados de registro de ponto possuem prazos de guarda definidos pela legislação trabalhista e fiscal, que geralmente se estendem por 5 (cinco) anos ou mais. Mesmo após o desligamento do Colaborador da empresa, esses registros são mantidos para o cumprimento dessas obrigações legais e para a defesa em eventuais processos judiciais ou administrativos.",

        // Section 7
        "sec7.title": "7. SEGURANÇA DA INFORMAÇÃO",
        "sec7.intro": "A ClockInIT adota as melhores práticas de segurança da informação do mercado para proteger os dados pessoais tratados, incluindo, mas não se limitando a:",
        "sec7.encryption": "Criptografia de dados em trânsito (TLS/SSL) e em repouso.",
        "sec7.access": "Controles de acesso restritos, garantindo que apenas pessoal autorizado tenha acesso aos dados.",
        "sec7.monitoring": "Monitoramento contínuo de vulnerabilidades e implementação de correções imediatas.",
        "sec7.backup": "Backups frequentes para garantir a disponibilidade e recuperação dos dados.",
        "sec7.signature": "Assinatura digital dos registros de ponto para garantir sua integridade, autenticidade e não-repúdio, conforme exigido pela Portaria 671/2021.",

        // Section 8
        "sec8.title": "8. SEUS DIREITOS (TITULAR DOS DADOS)",
        "sec8.intro": "O Colaborador, na qualidade de Titular dos Dados, pode exercer os direitos previstos na LGPD perante o <strong>Controlador (seu Empregador)</strong> ou, quando aplicável, junto à ClockInIT. Os principais direitos incluem:",
        "sec8.access": "Confirmação e Acesso:",
        "sec8.access_desc": "Obter a confirmação da existência de tratamento e o acesso aos seus dados (via relatórios e espelho de ponto).",
        "sec8.correction": "Correção:",
        "sec8.correction_desc": "Solicitar a correção de dados cadastrais incompletos, inexatos ou desatualizados.",
        "sec8.deletion": "Anonimização, Bloqueio ou Eliminação:",
        "sec8.deletion_desc": "Solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a lei. Nota: Dados essenciais para o cumprimento da legislação trabalhista (registro de ponto) não podem ser excluídos por solicitação simples, devido à obrigação legal de guarda imposta ao Empregador.",
        "sec8.information": "Informação:",
        "sec8.information_desc": "Ser informado sobre as entidades públicas e privadas com as quais seus dados são compartilhados.",
        "sec8.exercise": "Para exercer esses direitos, o Colaborador deve entrar em contato prioritariamente com o <strong>Departamento de Recursos Humanos (RH) ou o Encarregado de Dados (DPO) da sua empresa</strong>, que é o responsável legal pela gestão do seu cadastro na plataforma. O Usuário também pode gerenciar e solicitar a exclusão de seus dados diretamente na aplicação, quando esta funcionalidade estiver disponível.",

        // Section 9
        "sec9.title": "9. CRIANÇAS E ADOLESCENTES",
        "sec9.desc": "O sistema ClockInIT é estritamente destinado ao uso profissional. Não coletamos intencionalmente dados de crianças (menores de 12 anos). O tratamento de dados de adolescentes (menores aprendizes ou estagiários) é realizado com base na execução do contrato de trabalho/estágio e no cumprimento de obrigação legal, sempre visando o seu melhor interesse e a proteção de seus direitos.",

        // Section 10
        "sec10.title": "10. ALTERAÇÕES NESTA POLÍTICA",
        "sec10.desc": "A ClockInIT reserva-se o direito de atualizar esta Política de Privacidade periodicamente, a fim de refletir novas práticas de tratamento de dados ou alterações na legislação. A versão mais recente estará sempre disponível na plataforma. O uso continuado do serviço após a publicação de alterações implica a ciência e aceitação das novas condições.",

        // Section 11
        "sec11.title": "11. ENCARREGADO DE DADOS (DPO)",
        "sec11.intro": "Nos termos da LGPD, a ClockInIT designou um Encarregado de Proteção de Dados Pessoais para atuar como canal de comunicação entre o Controlador, os Titulares e a Autoridade Nacional de Proteção de Dados (ANPD).",
        "sec11.name_label": "Nome:",
        "sec11.name": "Diogo da Silva de Paula",
        "sec11.email_label": "E-mail:",
        "sec11.email_value": "dpo@clockin.it",

        // Contact
        "contact.title": "12. CONTATO E INFORMAÇÕES INSTITUCIONAIS",
        "contact.intro_employer": "Dúvidas ou solicitações relacionadas ao tratamento de seus dados pessoais devem ser direcionadas, preferencialmente, ao <strong>Encarregado de Dados (DPO) da sua Empresa (Controlador)</strong>.",
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
        "content.compliance": "This policy was prepared in strict compliance with the General Data Protection Law (Law No. 13.709/2018 - <strong>LGPD</strong>) and Ordinance No. 671/2021 of the Ministry of Labor and Social Security (MTP), reflecting our commitment to transparency and legality.",

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
        "sec1.dpo": "1.6 Data Protection Officer (DPO):",
        "sec1.dpo_desc": "Person appointed by the controller and operator to act as a communication channel between the controller, data subjects and the National Data Protection Authority (ANPD).",

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
        "sec3.table_title": "Table 1 - Purpose and Legal Basis for Data Processing",
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
        "sec5.title": "5. COOKIES",
        "sec5.intro": "We use cookies and similar technologies exclusively for the essential operation of the REP-P system:",
        "sec5.authentication": "Authentication:",
        "sec5.authentication_desc": "Keep the Employee logged in during navigation.",
        "sec5.security": "Security:",
        "sec5.security_desc": "Detect and prevent suspicious or unauthorized access.",
        "sec5.performance": "Performance:",
        "sec5.performance_desc": "Monitor the technical performance of the application.",
        "sec5.config": "The Employee can configure their browser to refuse cookies, however, we emphasize that this may compromise the correct functioning and security of the time recording system.",

        // Section 6
        "sec6.title": "6. STORAGE AND RETENTION",
        "sec6.storage": "Your data is stored on secure servers, which may be located in Brazil or abroad. In these cases, we ensure that the transfer occurs only to countries that provide an adequate level of data protection.",
        "sec6.retention_title": "Retention Period:",
        "sec6.retention_desc": "Time record data has retention periods defined by labor and tax legislation, which generally extend for 5 (five) years or more. Even after the Employee's termination from the company, these records are maintained to comply with these legal obligations. This data may also be preserved to comply with court orders, requests from competent administrative authorities or legal provisions.",

        // Section 7
        "sec7.title": "7. INFORMATION SECURITY",
        "sec7.intro": "ClockInIT adopts the best information security practices on the market to protect the processed personal data, not limited to:",
        "sec7.encryption": "Data encryption in transit (TLS/SSL) and at rest.",
        "sec7.access": "Restricted access controls, ensuring that only authorized personnel have access to the data.",
        "sec7.monitoring": "Continuous monitoring of vulnerabilities and implementation of immediate corrections.",
        "sec7.backup": "Frequent backups to ensure data availability and recovery.",
        "sec7.signature": "Digital signature of time records to ensure their integrity, authenticity and non-repudiation, in compliance with Ordinance 671/2021 of the Ministry of Labor and Social Security.",

        // Section 8
        "sec8.title": "8. YOUR RIGHTS (DATA SUBJECT)",
        "sec8.intro": "The Employee, as Data Subject, can exercise the rights provided for in LGPD before the <strong>Controller (your Employer)</strong> or, when applicable, with ClockInIT. The main rights include:",
        "sec8.access": "Confirmation and Access:",
        "sec8.access_desc": "Obtain confirmation of the existence of processing and access to your data.",
        "sec8.correction": "Correction:",
        "sec8.correction_desc": "Request correction of incomplete, inaccurate or outdated registration data.",
        "sec8.deletion": "Anonymization, Blocking or Elimination:",
        "sec8.deletion_desc": "Request deletion of unnecessary data or data processed in non-compliance with the law.",
        "sec8.deletion_note_title": "Note:",
        "sec8.deletion_note": "Complete data deletion may not be possible when there are legal retention obligations or the need to maintain it for the exercise of rights.",
        "sec8.information": "Information:",
        "sec8.information_desc": "Be informed about public and private entities with which your data is shared.",
        "sec8.exercise": "To exercise any of these rights, the Employee must contact the HR or Personnel Department of their Employer (Controller). In cases directly involving ClockInIT, the Employee may also contact our Data Protection Officer (section 11).",

        // Section 9
        "sec9.title": "9. CHILDREN AND ADOLESCENTS",
        "sec9.desc": "The REP-P platform is not intended for minors under 18 (eighteen) years of age, except in cases of hiring young apprentices or other forms of employment contract permitted by Brazilian legislation. When applicable, the collection and processing of minors' data will strictly observe labor and data protection regulations in force.",

        // Section 10
        "sec10.title": "10. CHANGES TO THIS POLICY",
        "sec10.desc": "ClockInIT reserves the right to update this Privacy Policy periodically. The most recent version will always be available on the platform. Continued use of the service after publication of changes implies awareness and acceptance of the new conditions.",

        // Section 11
        "sec11.title": "11. DATA PROTECTION OFFICER (DPO)",
        "sec11.intro": "In accordance with the LGPD, ClockInIT has designated a Data Protection Officer to act as a communication channel between the Controller, the Data Subjects and the National Data Protection Authority (ANPD).",
        "sec11.name_label": "Name:",
        "sec11.name": "Diogo da Silva de Paula",
        "sec11.email_label": "Email:",
        "sec11.email_value": "dpo@clockin.it",

        // Contact
        "contact.title": "12. CONTACT AND INSTITUTIONAL INFORMATION",
        "contact.intro_employer": "For questions related to data processed by the Controller (Employer), please contact your company's HR or Personnel Department directly.",
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
        "content.compliance": "Esta política fue elaborada en estricta conformidad con la Ley General de Protección de Datos Personales (Ley nº 13.709/2018 - <strong>LGPD</strong>) y la Ordenanza nº 671/2021 del Ministerio de Trabajo y Previsión (MTP), reflejando nuestro compromiso con la transparencia y la legalidad.",

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
        "sec1.dpo": "1.6 Encargado de Protección de Datos (DPO):",
        "sec1.dpo_desc": "Persona designada por el controlador y operador para actuar como canal de comunicación entre el controlador, los titulares de datos y la Autoridad Nacional de Protección de Datos (ANPD).",

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
        "sec3.table_title": "Tabla 1 - Finalidad y Base Legal del Tratamiento de Datos",
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
        "sec5.title": "5. COOKIES",
        "sec5.intro": "Utilizamos cookies y tecnologías similares exclusivamente para el funcionamiento esencial del sistema REP-P:",
        "sec5.authentication": "Autenticación:",
        "sec5.authentication_desc": "Mantener al Colaborador conectado durante la navegación.",
        "sec5.security": "Seguridad:",
        "sec5.security_desc": "Detectar y prevenir accesos sospechosos o no autorizados.",
        "sec5.performance": "Rendimiento:",
        "sec5.performance_desc": "Monitorear el rendimiento técnico de la aplicación.",
        "sec5.config": "El Colaborador puede configurar su navegador para rechazar cookies, sin embargo, destacamos que esto puede comprometer el funcionamiento correcto y la seguridad del sistema de registro de tiempo.",

        // Section 6
        "sec6.title": "6. ALMACENAMIENTO Y RETENCIÓN",
        "sec6.storage": "Sus datos se almacenan en servidores seguros, que pueden estar ubicados en Brasil o en el extranjero. En estos casos, garantizamos que la transferencia ocurra solo a países que proporcionen un grado adecuado de protección de datos.",
        "sec6.retention_title": "Período de Retención:",
        "sec6.retention_desc": "Los datos de registro de tiempo tienen períodos de retención definidos por la legislación laboral y fiscal, que generalmente se extienden por 5 (cinco) años o más. Incluso después de la terminación del Colaborador de la empresa, estos registros se mantienen para el cumplimiento de estas obligaciones legales. Estos datos también pueden ser preservados para cumplimiento de orden judicial, requerimiento de autoridad administrativa competente o previsión legal.",

        // Section 7
        "sec7.title": "7. SEGURIDAD DE LA INFORMACIÓN",
        "sec7.intro": "ClockInIT adopta las mejores prácticas de seguridad de la información del mercado para proteger los datos personales tratados, no limitándose a:",
        "sec7.encryption": "Cifrado de datos en tránsito (TLS/SSL) y en reposo.",
        "sec7.access": "Controles de acceso restringidos, garantizando que solo el personal autorizado tenga acceso a los datos.",
        "sec7.monitoring": "Monitoreo continuo de vulnerabilidades e implementación de correcciones inmediatas.",
        "sec7.backup": "Copias de seguridad frecuentes para garantizar la disponibilidad y recuperación de datos.",
        "sec7.signature": "Firma digital de los registros de tiempo para garantizar su integridad, autenticidad y no repudio, en conformidad con la Ordenanza 671/2021 del Ministerio de Trabajo y Previsión.",

        // Section 8
        "sec8.title": "8. SUS DERECHOS (TITULAR DE LOS DATOS)",
        "sec8.intro": "El Colaborador, como Titular de los Datos, puede ejercer los derechos previstos en LGPD ante el <strong>Controlador (su Empleador)</strong> o, cuando sea aplicable, con ClockInIT. Los principales derechos incluyen:",
        "sec8.access": "Confirmación y Acceso:",
        "sec8.access_desc": "Obtener la confirmación de la existencia de tratamiento y el acceso a sus datos.",
        "sec8.correction": "Corrección:",
        "sec8.correction_desc": "Solicitar la corrección de datos de registro incompletos, inexactos o desactualizados.",
        "sec8.deletion": "Anonimización, Bloqueo o Eliminación:",
        "sec8.deletion_desc": "Solicitar la eliminación de datos innecesarios o tratados en incumplimiento con la ley.",
        "sec8.deletion_note_title": "Nota:",
        "sec8.deletion_note": "La eliminación completa de los datos puede no ser posible cuando existan obligaciones legales de custodia o necesidad de mantenimiento para fines de ejercicio de derechos.",
        "sec8.information": "Información:",
        "sec8.information_desc": "Ser informado sobre las entidades públicas y privadas con las que se comparten sus datos.",
        "sec8.exercise": "Para ejercer cualquiera de estos derechos, el Colaborador debe contactar con el departamento de RR.HH. o Departamento de Personal de su Empleador (Controlador). En casos que involucren directamente a ClockInIT, el Colaborador también puede contactar con nuestro Encargado de Protección de Datos (sección 11).",

        // Section 9
        "sec9.title": "9. NIÑOS Y ADOLESCENTES",
        "sec9.desc": "La plataforma REP-P no está destinada a menores de 18 (dieciocho) años, excepto en casos de contratación de jóvenes aprendices u otras formas de contrato de trabajo permitidas por la legislación brasileña. Cuando sea aplicable, la recopilación y el tratamiento de datos de menores observarán rigurosamente las normas laborales y de protección de datos vigentes.",

        // Section 10
        "sec10.title": "10. CAMBIOS EN ESTA POLÍTICA",
        "sec10.desc": "ClockInIT se reserva el derecho de actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre disponible en la plataforma. El uso continuado del servicio después de la publicación de cambios implica el conocimiento y aceptación de las nuevas condiciones.",

        // Section 11
        "sec11.title": "11. ENCARGADO DE PROTECCIÓN DE DATOS (DPO)",
        "sec11.intro": "De conformidad con la LGPD, ClockInIT ha designado un Encargado de Protección de Datos para actuar como canal de comunicación entre el Controlador, los Titulares de Datos y la Autoridad Nacional de Protección de Datos (ANPD).",
        "sec11.name_label": "Nombre:",
        "sec11.name": "Diogo da Silva de Paula",
        "sec11.email_label": "Correo electrónico:",
        "sec11.email_value": "dpo@clockin.it",

        // Contact
        "contact.title": "12. CONTACTO E INFORMACIÓN INSTITUCIONAL",
        "contact.intro_employer": "Para preguntas relacionadas con los datos tratados por el Controlador (Empleador), póngase en contacto directamente con el departamento de RR.HH. o Departamento de Personal de su empresa.",
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
    initBackToTop();
});

// Initialize language from localStorage or default to PT
function initLanguage() {
    const savedLang = localStorage.getItem('clockinit_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    updateLanguage(currentLang);
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
        pt: 'ClockIn.IT - Política de Privacidade',
        en: 'ClockIn.IT - Privacy Policy',
        es: 'ClockIn.IT - Política de Privacidad'
    };
    document.title = titles[lang];

    // Update select with current language
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = lang;
    }

    // Save language preference
    localStorage.setItem('clockinit_lang', lang);
}

// Function to change language via select
function changeLanguage(lang) {
    updateLanguage(lang);
}

window.changeLanguage = changeLanguage;

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
