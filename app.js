const RELEASES_URL = "https://api.github.com/repos/adrianoramos/aprint/releases/latest";
const RELEASES_PAGE = "https://github.com/adrianoramos/aprint/releases";
const FALLBACK_RELEASE = {
  tag_name: "v1.2.0",
  published_at: "",
  html_url: RELEASES_PAGE,
  assets: [{
    name: "Aprint-1.2.0-setup.exe",
    browser_download_url: "https://github.com/adrianoramos/aprint/releases/download/v1.2.0/Aprint-1.2.0-setup.exe"
  }]
};

const translations = {
  "pt-BR": {
    skip: "Pular para o conteúdo",
    brandHome: "Aprint — início",
    mainNavigation: "Navegação principal",
    languageLabel: "Idioma",
    navFeatures: "Recursos",
    navAbout: "Sobre",
    navDownload: "Download",
    heroTitle: "Aprint — capture, anote e oculte informações",
    heroLead: "Aplicativo de captura de tela de código aberto: capture telas, proteja informações com máscaras e reúna imagens em documentos.",
    heroCta: "Baixar para Windows",
    heroAlt: "Captura de tela mostrando a seleção de uma região e a barra de ferramentas do Aprint.",
    introTitle: "Captura e edição de imagens",
    introBody: "Selecione uma área, um monitor ou todas as telas; marque os detalhes importantes e escolha se quer copiar, salvar ou continuar editando.",
    featuresTitle: "Recursos",
    captureTitle: "Captura de tela",
    captureBody: "Inicie a captura com um atalho global ou pelo ícone na bandeja do sistema. Escolha todos os monitores, a tela sob o cursor ou uma região retangular. Na seleção, a barra permite alternar entre as telas disponíveis. Configure o que acontece ao clicar fora da área, a ação após a captura, a pasta e o formato padrão.",
    regionCaptureAlt: "Captura de uma região da tela com a barra de ferramentas do Aprint.",
    regionCaptureCaption: "Selecione a região e use as ferramentas disponíveis durante a captura.",
    monitorCaptureAlt: "Barra de seleção para alternar entre telas e monitores.",
    monitorCaptureCaption: "Escolha a tela na barra de seleção de monitores.",
    captureSettingsAlt: "Configurações de modo de captura, ação após captura e formato de imagem.",
    captureSettingsCaption: "Defina modo, ação, localização e formato das capturas.",
    editTitle: "Anotações e edição",
    editBody: "Desenhe à mão livre, trace linhas e setas, adicione retângulos, círculos, texto, destaques e contadores numerados. Recorte a imagem e use desfazer e refazer para revisar as alterações. A captura pode ser anotada antes de concluir ou aberta no editor, onde também é possível copiar ou salvar em PNG, JPEG e BMP.",
    annotationToolsAlt: "Captura selecionada com desenhos, setas, formas, marcadores e ações de saída.",
    annotationToolsCaption: "Barra de ferramentas de anotação e ações da captura selecionada.",
    editorSettingsAlt: "Opções do editor para abertura, salvamento e escolha da ferramenta inicial.",
    editorSettingsCaption: "Opções para abertura do editor, ferramenta inicial e salvamento.",
    maskTitle: "Máscaras e reconhecimento de texto",
    maskBody: "Cubra informações com uma máscara de cor sólida ou pixelada e ajuste o tamanho dos pixels. A máscara automática usa o OCR do Windows para sugerir áreas de texto: revise cada sugestão, inclua ou exclua regiões e desenhe máscaras adicionais antes de aplicar.",
    maskMenuAlt: "Menu de máscaras com opções para pixelar, cobrir e iniciar a máscara automática.",
    maskMenuCaption: "Selecione a máscara sólida ou pixelada e ajuste suas opções.",
    maskReviewAlt: "Prévia de uma imagem com áreas pixeladas e controles para confirmar ou cancelar as máscaras.",
    maskReviewCaption: "Revise as regiões mascaradas antes de confirmar.",
    maskOcrAlt: "Regiões de texto detectadas automaticamente marcadas na imagem, com opções para aplicar ou cancelar as máscaras.",
    maskOcrCaption: "Revise as regiões de texto detectadas e aplique ou cancele as máscaras.",
    sessionTitle: "Sessões de documentos",
    sessionBody: "Escolha um modelo .docx e uma pasta de destino nas configurações. Inicie uma sessão pelo menu da bandeja ou pelo atalho configurado, envie capturas para o documento e encerre a sessão para salvá-lo. As imagens são adicionadas em sequência, com quebras de página entre elas. O documento usa o padrão aberto Office Open XML e é gerado sem precisar instalar o Microsoft Word.",
    sessionSettingsAlt: "Configurações de sessão para modelo de documento, pasta de destino e comportamento ao salvar.",
    sessionSettingsCaption: "Configure o modelo, a pasta de destino e o comportamento da sessão.",
    sessionSendAlt: "Captura em andamento com a ferramenta de texto selecionada e o comando para enviar a imagem ao documento.",
    sessionSendCaption: "Use “Enviar para documento” para incluir a captura na sessão ativa.",
    preferencesTitle: "Preferências e atalhos",
    preferencesBody: "Nas configurações, escolha o idioma, notificações e comportamento ao iniciar o Windows. Defina o atalho de captura — incluindo a tecla Print Screen — e atalhos separados para iniciar e encerrar sessões de documentos.",
    generalSettingsAlt: "Configurações gerais de inicialização, notificações, idioma e comportamento.",
    generalSettingsCaption: "Idioma, inicialização e notificações.",
    hotkeySettingsAlt: "Configurações do atalho de captura e dos atalhos de início e fim de sessão.",
    hotkeySettingsCaption: "Atalhos para captura e sessões de documentos.",
    aboutTitle: "Sobre o Aprint",
    aboutBody: "O Aprint é um aplicativo gratuito e de código aberto, licenciado sob GPL-3.0. Captura, edição de imagens, geração de documentos e reconhecimento de texto são processados localmente no computador.",
    sourceLink: "Código-fonte no GitHub",
    downloadTitle: "Download",
    windowsDownload: "Aprint para Windows",
    latestRelease: "Versão mais recente",
    downloadInstaller: "Baixar instalador",
    requirements: "Requer Windows 10 versão 1809 ou posterior e .NET 10 Desktop Runtime.",
    runtimeLink: "Baixar runtime ↗",
    allReleases: "Todas as versões",
    footerGithub: "GitHub",
    footerLicense: "Licença GPL-3.0"
  },
  en: {
    skip: "Skip to content",
    brandHome: "Aprint — home",
    mainNavigation: "Main navigation",
    languageLabel: "Language",
    navFeatures: "Features",
    navAbout: "About",
    navDownload: "Download",
    heroTitle: "Aprint — capture, annotate, and hide information",
    heroLead: "An open-source Windows app to capture screens, mask information, and collect images in documents.",
    heroCta: "Download for Windows",
    heroAlt: "Screenshot showing a selected region and the Aprint toolbar.",
    introTitle: "Screenshot capture and editing",
    introBody: "Select a region, a monitor, or all screens; mark important details and choose whether to copy, save, or continue editing.",
    featuresTitle: "Features",
    captureTitle: "Screen capture",
    captureBody: "Start a capture with a global shortcut or from the system tray icon. Choose all monitors, the screen under the cursor, or a rectangular region. During selection, use the toolbar to switch between available screens. Configure what happens when clicking outside the region, the action after capture, the destination folder, and the default image format.",
    regionCaptureAlt: "A screen region selected with the Aprint capture toolbar.",
    regionCaptureCaption: "Select a region and use the available tools while capturing.",
    monitorCaptureAlt: "Toolbar for switching between screens and monitors.",
    monitorCaptureCaption: "Choose a screen from the monitor selection bar.",
    captureSettingsAlt: "Capture mode, after-capture action, and image format settings.",
    captureSettingsCaption: "Set the capture mode, action, destination, and image format.",
    editTitle: "Annotations and editing",
    editBody: "Draw freehand, add lines and arrows, rectangles, circles, text, highlights, and numbered counters. Crop the image and use undo and redo to review changes. Annotate before completing a capture or open it in the editor to copy or save as PNG, JPEG, or BMP.",
    annotationToolsAlt: "Selected capture with drawings, arrows, shapes, markers, and output actions.",
    annotationToolsCaption: "Annotation tools and available actions for the selected capture.",
    editorSettingsAlt: "Editor options for opening, saving, and selecting the initial tool.",
    editorSettingsCaption: "Options for opening the editor, its initial tool, and saving.",
    maskTitle: "Masks and text recognition",
    maskBody: "Cover image content with a solid-color or pixelated mask and adjust the pixel size. Automatic masking uses Windows OCR to suggest text regions: review each suggestion, include or exclude regions, and draw additional masks before applying.",
    maskMenuAlt: "Mask menu with pixelate, cover, and automatic masking options.",
    maskMenuCaption: "Choose a solid or pixelated mask and adjust its options.",
    maskReviewAlt: "Image preview with pixelated regions and controls to confirm or cancel masks.",
    maskReviewCaption: "Review masked regions before confirming.",
    maskOcrAlt: "Automatically detected text regions outlined in the image, with options to apply or cancel masks.",
    maskOcrCaption: "Review the detected text regions, then apply or cancel the masks.",
    sessionTitle: "Document sessions",
    sessionBody: "Choose a .docx template and output folder in Settings. Start a session from the tray menu or its shortcut, send captures to the document, then end the session to save it. Images are added in sequence with page breaks between them. The document uses the open Office Open XML standard and is generated without requiring Microsoft Word to be installed.",
    sessionSettingsAlt: "Document session settings for the template, output folder, and save behavior.",
    sessionSettingsCaption: "Set the document template, output folder, and session behavior.",
    sessionSendAlt: "Capture in progress with the text tool selected and the command to send the image to the document.",
    sessionSendCaption: "Use “Send to document” to add the capture to the active session.",
    preferencesTitle: "Preferences and shortcuts",
    preferencesBody: "In Settings, choose the language, notifications, and Windows startup behavior. Set a capture shortcut—including the Print Screen key—and separate shortcuts for starting and ending document sessions.",
    generalSettingsAlt: "General settings for startup, notifications, language, and behavior.",
    generalSettingsCaption: "Language, startup, and notifications.",
    hotkeySettingsAlt: "Capture shortcut settings and document session start and end shortcuts.",
    hotkeySettingsCaption: "Shortcuts for capture and document sessions.",
    aboutTitle: "About Aprint",
    aboutBody: "Aprint is a free and open-source application licensed under GPL-3.0. Capturing, image editing, document generation, and text recognition are processed locally on your computer.",
    sourceLink: "Source code on GitHub",
    downloadTitle: "Download",
    windowsDownload: "Aprint for Windows",
    latestRelease: "Latest version",
    downloadInstaller: "Download installer",
    requirements: "Requires Windows 10 version 1809 or later and the .NET 10 Desktop Runtime.",
    runtimeLink: "Download runtime ↗",
    allReleases: "All releases",
    footerGithub: "GitHub",
    footerLicense: "GPL-3.0 license"
  },
  es: {
    skip: "Saltar al contenido",
    brandHome: "Aprint — inicio",
    mainNavigation: "Navegación principal",
    languageLabel: "Idioma",
    navFeatures: "Funciones",
    navAbout: "Acerca de",
    navDownload: "Descargar",
    heroTitle: "Aprint — captura, anota y oculta información",
    heroLead: "Una aplicación de código abierto para Windows: captura pantallas, protege información con máscaras y reúne imágenes en documentos.",
    heroCta: "Descargar para Windows",
    heroAlt: "Captura de pantalla con una región seleccionada y la barra de herramientas de Aprint.",
    introTitle: "Captura y edición de imágenes",
    introBody: "Selecciona una región, un monitor o todas las pantallas; marca los detalles importantes y elige si quieres copiar, guardar o seguir editando.",
    featuresTitle: "Funciones",
    captureTitle: "Captura de pantalla",
    captureBody: "Inicia una captura con un atajo global o desde el icono de la bandeja del sistema. Elige todos los monitores, la pantalla bajo el cursor o una región rectangular. Durante la selección, usa la barra para cambiar entre las pantallas disponibles. Configura qué ocurre al hacer clic fuera de la región, la acción posterior, la carpeta de destino y el formato de imagen predeterminado.",
    regionCaptureAlt: "Región de la pantalla seleccionada con la barra de captura de Aprint.",
    regionCaptureCaption: "Selecciona una región y usa las herramientas disponibles durante la captura.",
    monitorCaptureAlt: "Barra para cambiar entre pantallas y monitores.",
    monitorCaptureCaption: "Elige la pantalla en la barra de selección de monitores.",
    captureSettingsAlt: "Configuración del modo de captura, acción posterior y formato de imagen.",
    captureSettingsCaption: "Define el modo, la acción, la carpeta y el formato de las capturas.",
    editTitle: "Anotaciones y edición",
    editBody: "Dibuja a mano alzada y añade líneas, flechas, rectángulos, círculos, texto, resaltados y contadores numerados. Recorta la imagen y usa deshacer y rehacer para revisar los cambios. Anota antes de completar la captura o ábrela en el editor para copiarla o guardarla en PNG, JPEG o BMP.",
    annotationToolsAlt: "Captura seleccionada con dibujos, flechas, formas, marcadores y acciones de salida.",
    annotationToolsCaption: "Herramientas de anotación y acciones disponibles para la captura.",
    editorSettingsAlt: "Opciones del editor para abrir, guardar y elegir la herramienta inicial.",
    editorSettingsCaption: "Opciones para abrir el editor, elegir la herramienta inicial y guardar.",
    maskTitle: "Máscaras y reconocimiento de texto",
    maskBody: "Cubre partes de la imagen con una máscara de color sólido o pixelada y ajusta el tamaño de píxel. La máscara automática usa el OCR de Windows para sugerir regiones de texto: revisa cada sugerencia, incluye o excluye regiones y dibuja máscaras adicionales antes de aplicarlas.",
    maskMenuAlt: "Menú de máscaras con opciones para pixelar, cubrir e iniciar la máscara automática.",
    maskMenuCaption: "Elige una máscara sólida o pixelada y ajusta sus opciones.",
    maskReviewAlt: "Vista previa con regiones pixeladas y controles para confirmar o cancelar las máscaras.",
    maskReviewCaption: "Revisa las regiones enmascaradas antes de confirmar.",
    maskOcrAlt: "Regiones de texto detectadas automáticamente marcadas en la imagen, con opciones para aplicar o cancelar las máscaras.",
    maskOcrCaption: "Revisa las regiones de texto detectadas y aplica o cancela las máscaras.",
    sessionTitle: "Sesiones de documentos",
    sessionBody: "Elige una plantilla .docx y una carpeta de destino en Configuración. Inicia una sesión desde el menú de la bandeja o con su atajo, envía capturas al documento y termina la sesión para guardarlo. Las imágenes se añaden en secuencia, con saltos de página entre ellas. El documento utiliza el estándar abierto Office Open XML y se genera sin necesidad de instalar Microsoft Word.",
    sessionSettingsAlt: "Configuración de la sesión para la plantilla, carpeta de destino y opciones de guardado.",
    sessionSettingsCaption: "Configura la plantilla, la carpeta de destino y el comportamiento de la sesión.",
    sessionSendAlt: "Captura en curso con la herramienta de texto seleccionada y el comando para enviar la imagen al documento.",
    sessionSendCaption: "Usa “Enviar al documento” para añadir la captura a la sesión activa.",
    preferencesTitle: "Preferencias y atajos",
    preferencesBody: "En Configuración, elige el idioma, las notificaciones y el inicio con Windows. Define un atajo de captura —incluida la tecla Print Screen— y atajos separados para iniciar y terminar sesiones de documentos.",
    generalSettingsAlt: "Configuración general de inicio, notificaciones, idioma y comportamiento.",
    generalSettingsCaption: "Idioma, inicio y notificaciones.",
    hotkeySettingsAlt: "Atajos de captura y para iniciar y terminar sesiones de documentos.",
    hotkeySettingsCaption: "Atajos para capturas y sesiones de documentos.",
    aboutTitle: "Acerca de Aprint",
    aboutBody: "Aprint es una aplicación gratuita y de código abierto, con licencia GPL-3.0. La captura, edición de imágenes, generación de documentos y reconocimiento de texto se procesan localmente en el equipo.",
    sourceLink: "Código fuente en GitHub",
    downloadTitle: "Descargar",
    windowsDownload: "Aprint para Windows",
    latestRelease: "Última versión",
    downloadInstaller: "Descargar instalador",
    requirements: "Requiere Windows 10 versión 1809 o posterior y .NET 10 Desktop Runtime.",
    runtimeLink: "Descargar runtime ↗",
    allReleases: "Todas las versiones",
    footerGithub: "GitHub",
    footerLicense: "Licencia GPL-3.0"
  }
};

const languageSelect = document.querySelector("#language");
const releaseDate = document.querySelector("#release-date");

function chooseLanguage() {
  const savedLanguage = localStorage.getItem("aprint-site-language");
  if (Object.hasOwn(translations, savedLanguage)) return savedLanguage;
  const browserLanguage = navigator.language.toLowerCase().split("-")[0];
  if (browserLanguage === "pt") return "pt-BR";
  if (browserLanguage === "es") return "es";
  return "en";
}

function setLanguage(language) {
  const selected = Object.hasOwn(translations, language) ? language : "en";
  const strings = translations[selected];
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = strings[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = strings[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = strings[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.title = strings.heroTitle;
  document.querySelector('meta[name="description"]').content = strings.heroLead;
  document.querySelector('meta[property="og:title"]').content = strings.heroTitle;
  document.querySelector('meta[property="og:description"]').content = strings.heroLead;
  languageSelect.value = selected;

  if (releaseDate.dataset.date) updateReleaseDate(releaseDate.dataset.date, selected);
}

function updateReleaseDate(value, language) {
  const date = new Date(value);
  if (!Number.isNaN(date.valueOf())) {
    const locale = language === "pt-BR" ? "pt-BR" : language;
    releaseDate.textContent = new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
  }
}

function displayRelease(release) {
  const version = release.tag_name || FALLBACK_RELEASE.tag_name;
  const installer = release.assets?.find((asset) => /\.exe$/i.test(asset.name));
  const fallbackInstaller = FALLBACK_RELEASE.assets[0];
  document.querySelector("#release-version").textContent = version;
  document.querySelector("#download-button").href = installer?.browser_download_url || fallbackInstaller.browser_download_url;
  document.querySelector("#release-link").href = release.html_url || RELEASES_PAGE;

  if (release.published_at) {
    releaseDate.dataset.date = release.published_at;
    updateReleaseDate(release.published_at, languageSelect.value);
  }
}

async function loadLatestRelease() {
  try {
    const response = await fetch(RELEASES_URL, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub Releases returned HTTP ${response.status}`);
    displayRelease(await response.json());
  } catch (error) {
    console.info("Latest release metadata unavailable; using the last known release.", error);
    displayRelease(FALLBACK_RELEASE);
  }
}

document.querySelector("#year").textContent = new Date().getFullYear();
languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
  localStorage.setItem("aprint-site-language", languageSelect.value);
});
setLanguage(chooseLanguage());
loadLatestRelease();
