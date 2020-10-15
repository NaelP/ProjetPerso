<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Game</title>
</head>

    <body class="container-fluid">
        <h1 class="text-center"> Game </h1>
        <div class="row" id ="principalRow">
            <div class="col" id="persoCol">
                <div id="imagePerso"  class="row d-flex justify-content-center">
                </div>
                <div class="row d-flex justify-content-center">
                    <p id="namePerso"></p>
                </div>
                <div class="row d-flex justify-content-center">
                    <p id="hpPerso"></p>
                </div>
                <div class="row d-flex justify-content-center">
                    <button class="persoAttack btn btn-success btn_game" onclick="attack('Attack', 'Magie', 'Soin')"> Attaquer </button>
                    <button class="cancelAttack btn btn-success btn_game" onclick="cancel('Attack', 'Magie', 'Soin')"> Annuler </button>
                </div>
                <div class="row d-flex justify-content-center mt-3">
                    <button class="persoMagie btn btn-success btn_game" onclick="attack('Magie', 'Attack', 'Soin')"> Magie </button>
                    <button class="cancelMagie btn btn-success btn_game" onclick="cancel('Magie', 'Attack', 'Soin')"> Annuler </button>
                </div>
                <div class="row d-flex justify-content-center">
                    <button class="persoSoin btn btn-success mt-3 btn_game" onclick=""> Soigner </button>
                    <button class="cancelSoin btn btn-success btn_game" onclick="cancel('Soin', 'Magie', 'Attack')"> Annuler </button>
                </div>
            </div>
            <!-- Création dynamique des monstres -->
            <div class="col" id="monsters">
            </div>
        </div>
    </body>
    <script type ="text/javascript" src='js/jquery.js'></script>
    <script type ="text/javascript" src='js/bootstrap.min.js'></script>
    <script type ="text/javascript" src='js/main.js'></script>
    <script type ="text/javascript" src='js/perso.js'></script>
</html>