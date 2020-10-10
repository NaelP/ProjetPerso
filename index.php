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
        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="d-flex justify-content-center mb-3">
                    <button class="connect btn btn-success" onclick="btnAcceuil('inscription')"> S"inscrire </button>
                </div>
                <div class="justify-content-center mb-3 inscription">
                    <div class="cadre d-flex justify-content-center">
                        <form class="mb-5 mt-5">
                            <p class="text-center mb-0"> Identifiant </p>
                            <input class="mb-3 inputAccueil" id="identifiant" type="text" />
                            <p class="text-center mb-0"> Adresse mail </p>
                            <input class="mb-3 inputAccueil" id="mail" type="text" />
                            <p class="text-center mb-0"> Mot de passe </p>
                            <input class="mb-3 inputAccueil" id="motDePasse" type="text" />
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary"> Valider </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="d-flex justify-content-center mb-3">
                    <button class="connect btn btn-success" onclick="btnAcceuil('connection')"> Se connecter </button>
                </div>
                <div class="justify-content-center mb-3 connection">
                    <div class="cadre d-flex justify-content-center">
                        <form class="mb-5 mt-5">
                            <p class="text-center mb-0"> Identifiant (Ou Mail) </p>
                            <input class="mb-3 inputAccueil" id="identifiant" type="text" />
                            <p class="text-center mb-0"> Mot de passe </p>
                            <input class="mb-3 inputAccueil" id="motDePasse" type="text" />
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary"> Valider </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script type ="text/javascript" src='js/jquery.js'></script>
    <script type ="text/javascript" src='js/bootstrap.min.js'></script>
    <script type ="text/javascript" src='js/main.js'></script>
</html>