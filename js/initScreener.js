﻿var lstTokens = new Array();
var lstCoins = new Array();
var lstUnkTokens = new Array();
var exceptTokens = new Array();
var exceptContract = new Array();
// var lstForkDeltaTokens = new Array();
var smallListTokens = new Array();
// var smallListForkDeltaTokens = new Array();
var smallListCoins = new Array();
var list_Wallets_Online = new Array();
var list_All_CMCTokens = new Array();
var list_All_IDEXTokens = new Array();
var list_All_TokenStoreTokens = new Array();
var list_All_BinanceTokens = new Array();


////// Variable pour : COINMARKETCAP :-------------------------------------------------------------------------------
var cmc_urlAPI = "https://api.coinmarketcap.com/v1/ticker/";
var cmc_urlAPIinformation = "https://api.coinmarketcap.com/v1/global/?convert=";
var cmc_urlStaticIMG = "https://s2.coinmarketcap.com/static/img/coins/64x64/";
var cmc_urlStatic32IMG = "https://s2.coinmarketcap.com/static/img/coins/32x32/";
var cmc_urlAPIQuickSearch = "https://s2.coinmarketcap.com/generated/search/quick_search.json";
var cmc_urlCurrencies = "https://coinmarketcap.com/currencies/";

var cmc_urlAPIv1 = {
    ticker: "https://api.coinmarketcap.com/v1/ticker/",
    global: "https://api.coinmarketcap.com/v1/global/?convert=",
    icon32: "https://s2.coinmarketcap.com/static/img/coins/32x32/",
    icon64: "https://s2.coinmarketcap.com/static/img/coins/64x64/",
    currencies: "https://coinmarketcap.com/currencies/",
    quicksearch: "https://s2.coinmarketcap.com/generated/search/quick_search.json"
}

var cmc_urlAPIv2 = {
    listing: "https://api.coinmarketcap.com/v2/listings/",
    ticker: "https://api.coinmarketcap.com/v2/ticker/",
    global: "https://api.coinmarketcap.com/v2/global/?convert=",
    icon32: "https://s2.coinmarketcap.com/static/img/coins/32x32/",
    icon64: "https://s2.coinmarketcap.com/static/img/coins/64x64/",
    currencies: "https://coinmarketcap.com/currencies/",
    quicksearch: "https://s2.coinmarketcap.com/generated/search/quick_search.json",
    sparkLine1d: "https://s2.coinmarketcap.com/generated/sparklines/web/1d/usd/",
    sparkLine7d: "https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/"
}

var neo_urlAPIv1 = {
    listing: "http://notifications.neeeo.org/v1/tokens",
    /* listing: "https://neoscan.io/api/main_net/v1/get_assets", */
    /* balance: "https://neoscan.io/api/main_net/v1/get_balance/" */
    balance: "https://api.neoscan.io/api/main_net/v1/get_balance/"
}

var balance_urlAPI = {
    SMARTCASH: "https://insight.smartcash.cc/api/addr/"
}

var cmc_sparkLine7d = "https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/";
var cmc_sparkLine1d = "https://s2.coinmarketcap.com/generated/sparklines/web/1d/usd/";

var spootnik_urlStatic32IMG = "http://spootnik.fr/wscryptos/coins/32x32/";
//-------------------------------------------------------------------------------------------------------------------
// API KEYS
var urlInfura = "https://mainnet.infura.io/";
var infura_KEY = "";
// Activation du Web3
var apiWebJS = false;
//-------------------------------------------------------------------------------------------------------------------
// WALLET
// var ethAddress = "";
// var contractJC = ""
var tokenName;
var walletBalance = 0;
var fond_vert = "";
var fond_rouge = "";
var priceToken = {
    ETH: 0,
    BTC: 0,
    LTC: 0,
    NEO: 0
};

var symbol = {
    ETH: "<b>Ξ</b>",
    BTC: "<i class='fa fa-btc'></i> ",
    LTC: "Ł",
    EUR: "€",
    USD: "$",
    NEO: "Neo"
};

var _decimals = {
    BTC: 7,
    ETH: 7,
    LTC: 7,
    NEO: 7,
    EUR: 7,
    USD: 7,
    CARD: 7
};

var walletBalances = {
    lasttime: 0,
    BTC: 0,
    ETH: 0,
    LTC: 0,
    NEO: 0,
    EUR: 0,
    USD: 0
};


var lastvisit = new Date();
var coolDown = {
    global: 600,
    /* 10min */
    maj: 30000,
    /* 20 jours */
    balance: 86400,
    /* 1 jour */
    cmc_global: 300,
    /* 5min */
    cmc_tokens: 300,
    /* 5min */
    neo_tokens: 86400 /* 1 jour */
};

var configScreener = {
    onlineMode: false,
    currencyDefault: "EUR",
    nightMode: false,
    localWallet: true,
    otherWallet: true,
    viewOrder: "24H",
    walletName: "tokens.csv",
    graphDisplay: true,
    graphMode: "7d",
    version: 0.55
};

var colorBadge = {
    blue: "badge-primary",
    success: "badge-success",
    info: "badge-info",
    warning: "badge-warning",
    danger: "badge-danger",
    light: "badge-light",
    dark: "badge-dark"
};
var colorCard = {
    blue: "bg-primary",
    success: "bg-success",
    info: "bg-info",
    warning: "bg-warning",
    danger: "bg-danger",
    light: "bg-light",
    dark: "bg-dark",
    secondary: "bg-secondary"
};

exceptTokens.push("PRO");
exceptContract = [(
    "0x940d73c91db9f82440702f6cc8323a8c60583777" /* TEFOOD (1er tokens)  */ ,
    "0xbe428c3867f05dea2a89fc76a102b544eac7f772" /* Token CyberVeinToken */ ,
    "0xd6e49800decb64c0e195f791348c1e87a5864fd7" /* Token ReceiptCoin */
    /* "0x12fb5d5802c3b284761d76c3e723ea913877afba"  Token Hydro */
)];

var all_ExternalLinks = {
    Etherscan: "https://etherscan.io/address/",
    Ethplorer: "https://ethplorer.io/address/",
    DeltaBalances: "https://deltabalances.github.io/index.html#",
    MyEtherWallet: "https://www.myetherwallet.com",
    MyCrypto: "https://mycrypto.com",
    NeoTracker: "https://neotracker.io/wallet",
    WavesPlatform: "https://beta.wavesplatform.com",
    CMC: "https://coinmarketcap.com/",
    ForkDelta: "https://forkdelta.github.io/",
    EtherDelta: "https://etherdelta.com/",
    IDEX: "https://idex.market/",
    DDEX: "https://ddex.io/trade",
    Switcheo: "https://switcheo.exchange/",
    MetaMask: "https://metamask.io/",
}

var cardHeader =
    "<div id='headerCard' class='card-header'>" +
    "<div class='row'>" +
    "<div class='col-3 col-md-3' data-toggle='modal' data-target='#modal_Token' style='left: -4px;'><img class='' src='" + cmc_urlStaticIMG + "_ID_FLAG_.png' data-toggle='tooltip' data-html='true' title='_SUPPLY_' /></div>" +
    "<div class='col-9 col-md-9'>" +
    "<h6 class='card-title font-weight-bold' data-toggle='tooltip' data-html='true' title='_CONTRACT_'><a href='" + cmc_urlCurrencies + "_SLUG_' target='_blank'>_TOKEN_</a> <span class='small font-weight-light'><sup>_SHT_</sup></span><span id='tokenPill' class=''></span></h6>" +
    "<p class='card-text'>_TokenP_ <span id='badgePchange' class='float-right badge'>_PChange_%</span></p>" +
    "<p class='card-text'>" +
    "<span class='float-left small'><b>_NBToken_</b> _S_</span>" +
    "</p>" +
    "<hr>" +
    "<p class='card-text'>" +
    "<span id='walletPrice_CMC' data-toggle='tooltip' data-placement='right' title='Moyenne sur CoinMarketCap' class='float-left small align-baseline'><img class='align-baseline' width='10' src='https://coinmarketcap.com/favicon.ico' /> _WalletP_CMC_</span>" +
    "<span id='walletPrice_Idex' data-toggle='tooltip' data-placement='right' title='Moyenne sur IDEX' class='float-right small align-baseline'>_WalletP_IDEX_ <a href='" + all_ExternalLinks.IDEX + "eth/_SHT_'><img class='align-baseline' width='10' src='https://s2.coinmarketcap.com/static/img/exchanges/32x32/310.png' /></a></span>" +
    "</p>" +
    "<hr id='sep_second_dex'>" +
    "<p class='card-text'>" +
    "<span id='walletPrice_TokenStore' data-toggle='tooltip' data-placement='right' title='Moyenne sur TokenStore' class='float-left small align-baseline'><img class='align-baseline' width='10' src='https://token.store/favicon.ico' /> _WalletP_TS_</span>" +
    "<span id='walletPrice_ForkDelta' data-toggle='tooltip' data-placement='right' title='Moyenne sur ForkDelta' class='float-right small align-baseline'>_WalletP_ForkD_ <img class='align-baseline' width='10' src='https://idex.market/favicon.ico' /></span>" +
    "</p>" +
    "</div>" +
    "</div>" +
    "</div>";
var cardBody =
    "<div id='rowTokenInfos' class='card-body'>" +
    "<div id='rtHeaders' class='row'>" +
    "<div class='col-3 col-md-3 text-center'><b>RANK</b></div>" +
    "<div class='col-4 col-md-4 text-center'><b>MARKET CAP</b></div>" +
    "<div class='col-4 col-md-4 text-center'><b>VOLUME (24H)</b></div>" +
    "</div>" +
    "<div id='rtDatas' class='row'>" +
    "<div class='col-3 col-md-3 text-center'>_RANK_</div>" +
    "<div class='col-4 col-md-4 text-center'>_CurrMCAP__MCAP_</div>" +
    "<div class='col-4 col-md-4 text-center'>_CurrMCAP__VOLUME_</div>" +
    "</div>" +
    "</div>";
var cardFooter =
    "<div id='footerCard' class='card-footer'>" +
    "<div class='row'>" +
    "<div class='col-3'>" +
    "<div class='nav flex-column nav-pills' role='tablist' aria-orientation='vertical'>" +
    "<a class='nav-link small' id='toggle_1d' data-toggle='pill' href='#onday_SLUG_' role='tab' aria-controls='v-pills-profile' aria-selected='false' style='padding:2px;text-align:center;'>1d</a>" +
    "<a class='nav-link small active' id='toggle_7d' data-toggle='pill' href='#sevendays_SLUG_' role='tab' aria-controls='v-pills-profile' aria-selected='true' style='padding:2px;text-align:center;'>7d</a>" +
    "</div>" +
    "</div>" +
    "<div class='col-9' style='padding-left:0px;'>" +
    "<div class='tab-content'>" +
    "<div class='tab-pane fade' id='onday_SLUG_' role='tabpanel'>" +
    "<img id='sparklineoned' class='img-fluid mx-auto d-block' style='padding-top:5px;padding-bottom:5px;' alt='No Graph' src='" + cmc_sparkLine1d + "_ID_FLAG_.png' />" +
    "</div>" +
    "<div class='tab-pane fade show active' id='sevendays_SLUG_' role='tabpanel'>" +
    "<img id='sparklinesevend' class='img-fluid mx-auto d-block' style='padding-top:5px;padding-bottom:5px;' alt='No Graph' src='" + cmc_sparkLine7d + "_ID_FLAG_.png' />" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

var popupBody = "";
var popupFooter = "<button type='button' class='btn btn-success' data-dismiss='modal'>CmC</button>" +
    "<button type='button' class='btn btn-warning' data-dismiss='modal'>Coin Info</button>" +
    "<button type='button' class='btn btn-danger' data-dismiss='modal'>Fermer</button>";

var templateBadge =
    "<div id='_SLUG_' class='col-12 col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-2'>" +
    "<div class='card'>" +
    cardHeader +
    cardBody +
    cardFooter +
    "</div>" +
    "</div>";

var _history = {
    "0.54": "Ajout des Supply en tooltip, d'une gestion des log/debug, tooltip sur de nouveaux elements.",
    "0.53": "Correction des derniers bugs avant livraison dans la branche Tatooine sur GitHub.",
    "0.52": "Amélioration de l'interface utilisateur, ajout des liens dans les menus.",
    "0.51": "Vérification de l'installation et des mises à jours de CS.",
    "0.5": "Réorganisation des variables, noms, portés. Nettoyage du code.",
    "0.4": "Refonte du moteur de traitement du wallet local.",
    "0.3": "Ajout des icones et graphiques relatif au token.",
    "0.2": "Définition des Cartes d'affichage des Tokens.",
    "0.1": "Initialisation de la nouvelle version."
}
var titleApp = "CryptoScreener";
var projectApp = "Tatooine";

var walletAddress = {
    ETH: "",
    BTC: "",
    LTC: ""
};

var modal_installation = "Bienvenue dans l'installation de CryptoScreener. <br> Il est indispensable d'utiliser le navigateur «Chrome» disponible ici : <a href='https://www.google.com/chrome/' target='_blank'>https://www.google.com/chrome/</a><br>" +
    "<br> Ajouter au raccourcci de Chrome les options suivantes :<br>" +
    "<span class='border small'><samp>--allow-file-access-from-files<br>" +
    "--disable-web-security</samp></span><br> Ces options permettent le chargement des données en local. Le syndrome du «cross domain» peut aussi survenir avec certain navigateur autre que «Chrome». Pour limiter cet" +
    "effet vous pouvez télécharger la base Coinmarketcap.com au format JSON et la sauvegarder sous le nom de '<a href='https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR' target='_blank'>cmc.json</a>' dans le dossier principal" +
    "avec l'index.html.<br>" +
    "<br> Pour les utlisateurs de Mac, utilisez la ligne de commande ci-dessous pour lancer «Chrome» avec les options indiquées : <br>" +
    "<span class='border small'><samp>open /Applications/Google\ Chrome.app --args --allow-file-access-from-files --disable-web-security</samp></span>";

var modal_faq = "<h5>Menu «Indispensable» :</h5>" +
    "<ul><li>Regroupe un ensemble de liens utiles voir indispensable dans le monde des cryptos monnaies.</li></ul>" +
    "<h5>Menu «Markets» :</h5>" +
    "<ul><li>Liens vers les principaux «exchanges» avec référent dans la première partie et sans dans la seconde.</li></ul>" +
    "<h5>Menu «Télégram» :</h5>" +
    "<h5>Menu «Wallets» :</h5>" +
    "<h5>Menu «Options» :</h5>" +
    "<ul><li><b>Mode Online :</b> <i>non disponible pour le moment</i> </li>" +
    "<li><b>Wallet Local :</b> Charge l'extraction de votre wallet ethereum de DeltaBalances au format «.CSV».</li>" +
    "<li><b>Graphiques :</b> Affiche les graphiques 7 jours de tout les tokens.</li>" +
    "<li><b>Tri :</b> Affichage des tokens suivant un tri sur leur «rang», votre «balance» ou sur leur «volume en 24h».</li>" +
    "<li><b>Wallet Ethereum :</b> Enregistre votre adresse ethereum pour l'ajouter aux liens comme «Etherscan.io» ou «Ethplorer.io» et vous permettre une ouverture de ces sites directement avec votre adresse.</li></ul>";