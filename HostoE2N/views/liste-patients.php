<?php
include '../models/database.php';
include '../models/patients.php';
include '../controllers/ctlr-liste-patient.php'
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>E2N - L'Hosto du Pauvre !</title>
        <link rel="shortcut icon" href="../assets/img/doigt.png"/>
        <meta name="author" content="Badik76" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=Thasadith" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="../assets/import/Materialize/css/materialize.min.css"  media="screen" />
        <!-- Import personnal stylesheet -->
        <link type="text/css" rel="stylesheet" href="../assets/css/style.css" />
        <!--Let browser know website is optimized for mobile-->
    </head>
    <body>
        <div class="container">
            <div class="card-panel row">
                <div class="col l6 s12">
                    <a href="ajout-patients.php" class="waves-effect waves-light btn"><i class="material-icons left">create</i>ENREGISTRER PATIENT</a>
                    <a href="../index.html" class="waves-effect waves-light btn"><i class="material-icons left">home</i>RETOUR</a>
                    <div class="row">                    
                        <form action="liste-patients.php" method="GET">
                            <div class="col l6 s12">
                                <input type="search" id="maRecherche" name="search" placeholder="Rechercher un patient sur le site…" />
                                <input type="submit" class="waves-effect waves-light btn" value="Rechercher" />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col l6 s12">
                    <div class="container wrapper-align center-align left-part add">
                        <img class="responsive-img" src="../assets/img/listepatient.jpg" alt="Cabinet médical"/>
                    </div>
                </div>
                <h1 class="list-patient center-align">Liste des patients</h1>

                <p class="center-align"><?= $deleteOk ? 'Le patient a été supprimé' : '' ?><p>

                    <?php if ($noMatch) { ?>
                    <p class="center-align"><?= $noMatchMessage ?></p>
                <?php } else { ?>

                    <table class="responsive-table highlight bordered table-patient">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Date de naissance</th>
                                <th>Profil</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- utilisation de la boucle foreach pour parcourir le tableau $listPatients avec comme alias $patient-->
                            <?php foreach ($listPatients AS $patient) { ?>
                                <tr>
                                    <td><?= $patient->lastname ?></td>
                                    <td><?= $patient->firstname ?></td>
                                    <td><?= $patient->birthdate ?></td>
                                    <td><a href="profil-patient.php?idPatient=<?= $patient->id ?>"><i class="material-icons">person</i></a></td>
                                    <td><a class="modal-trigger" href="#modal<?= $patient->id ?>"><i class="material-icons">delete_forever</i></a>
                                        <!-- Structure du modal pour valider le delete -->
                                        <div id="modal<?= $patient->id ?>" class="modal">
                                            <div class="modal-content center-align">
                                                <p>Patient à supprimer :</p>
                                                <ul>
                                                    <li><?= $patient->lastname . ' ' . $patient->firstname ?></li>
                                                    <li><?= $patient->birthdate ?></li>
                                                </ul>
                                                <p>!! Attention la suppression est irréversible !!</p>
                                            </div>
                                            <div class="modal-footer center-align">
                                                <a href="liste-patients.php?deleteThis=<?= $patient->id ?>" class="modal-action modal-close waves-effect waves-red btn-flat">SUPPRIMER</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            <?php } ?><!-- fin de la boucle for each -->
                        </tbody>
                    </table>

                    <?php if ($page > 1) { ?>
                        <a href="liste-patients.php?page=<?= $page - 1 ?>" class="waves-effect waves-light btn"><i class="material-icons left">arrow_back</i></a>                        
                        <?php
                    };
                    for ($pageNumber = 1; $pageNumber <= $pagesMax; $pageNumber++) {
                        ?>
                        <a href="liste-patients.php?page=<?= $pageNumber ?>" class="waves-effect waves-light btn"><?= $pageNumber ?></a>
                        <?php
                    };
                    if ($page < $pagesMax) {
                        ?>
                        <a href="liste-patients.php?page=<?= $page + 1 ?>" class="waves-effect waves-light btn"><i class="material-icons right">arrow_forward</i></a>
                    <?php }; ?>

                    <p>Page actuelle : <?= $page . ' / ' . $pagesMax ?></p>
                <?php } ?> <!-- fin du if -->
            </div>
        </div>
        
<!--        <div class="form-group">
                            Nom : <select required name="patientname">
                                <?php foreach ($listPatients as $patient) { ?>

                                    <option value="<?= $patient->id ?>"><?= $patient->firstname ?> <?= $patient->lastname ?></option>
                                    <?php
                                }
                                ?>
                            </select>-->

                        </div>
        <!--coryright-->
        <div class="container-fluid rem10">
            2018 - Made by Badik 🖕 with <i class="fas fa-heart red-text rem10"></i>
        </div>
        <!--end coryright-->
        <!--Scripts-->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"></script>
        <script src="../assets/import/Materialize/js/materialize.min.js"></script>
        <script src="../assets/import/SweetAlert/sweetalert.min.js"></script>
        <script src="../assets/js/script.js"></script>
    </body>
</html>