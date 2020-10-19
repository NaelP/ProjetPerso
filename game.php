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
        <div id="showLevel" class="row d-flex justify-content-center">
            <p> Level Up ! You reached Level &nbsp;<p id="levelUp"></p>&nbsp;!</p>
        </div>
        <div class="row" id ="principalRow">
            <div class="col d-flex justify-content-center" id="persoCol">
                <div id="border" class="">
                    <div id="imagePerso"  class="row d-flex justify-content-center">
                    </div>
                    <div class="row d-flex justify-content-center">
                        <p id="namePerso"></p>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <p id="hpPerso"></p>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <p id="levelPerso"></p>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <p id="xpPerso"></p>
                    </div>
                    <div id="CancelButton" class="row d-flex justify-content-center">
                        <button class="cancel btn btn-danger btn_game" onclick="cancel('Attack', 'Magie', 'Soin')"> Annuler </button>
                    </div>
                    <div id="AttackCancel" class="row d-flex justify-content-center">
                        <button class="persoAttack btn btn-primary btn_game" onclick="attack('Attack', 'Magie', 'Soin')"> Attaquer </button>
                    </div>
                    <div id="MagieCancel" class="row d-flex justify-content-center mt-3">
                        <button class="persoMagie btn btn-primary btn_game" onclick="attack('Magie', 'Attack', 'Soin')"> Magie </button>
                    </div>
                    <div id="SoinCancel" class="row d-flex justify-content-center mt-3">
                        <button class="persoSoin btn btn-primary btn_game" onclick=""> Soigner </button>   
                    </div>
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