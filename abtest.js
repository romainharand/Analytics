(function()
{
    /* On limite le test à la page cible */
    if (document.location.hash === "#dpi/monfinancement/" && typeof kameleoonTestTriggerFunction === "undefined")
    {
        window.kameleoonTestTriggerExperimentId = 135962; /* ID de l'experiment */
        window.kameleoonTestTriggerSelector = '.awt--root-element'; /* Sélecteur CSS de l'élément à modifier */
        window.kameleoonTestTriggerIterations = 0;
        window.kameleoonTestTriggerTimeout = 250;
        window.kameleoonTestTriggerLimit = 240; /* On boucle 60 secondes */
        window.kameleoonExperimentsPile = [];

        /* On attend que l'élément que l'on souhaite modifier dans le DOM soit présent (à cause de l'asynchrone des AWT) */
        window.kameleoonTestTriggerFunction = function ()
        {
            /* Element trouvé ET on a le consentement, on lance l'experiment */
            if (document.querySelector(kameleoonTestTriggerSelector) && document.querySelector(kameleoonTestTriggerSelector).innerHTML.match("Quels sont vos revenus mensuels net ?") && typeof tC !== "undefined" && tC.internalvars && tC.internalvars.user_consent && tC.internalvars.user_consent.indexOf('4') !== -1)
                Kameleoon.API.Experiments.trigger(kameleoonTestTriggerExperimentId, false);
            /* Element non trouvé, on retente notre chance plus tard */
            else if (kameleoonTestTriggerIterations < kameleoonTestTriggerLimit)
                setTimeout(function (){kameleoonTestTriggerFunction();}, kameleoonTestTriggerTimeout);

            kameleoonTestTriggerIterations++;
        };

        kameleoonTestTriggerFunction();
    }

    /* Par defaut, le test n'est pas lancé car on doit attendre que le DOM se charge (cas AWT) */
    return false;
})();

// Envoie des hits dans AT
window.kameleoonAtMvtFunction = function (event)
{
	if (window.ATTag)
	{
		var experiment = event.detail.experiment;
		var associatedVariation = experiment.associatedVariation;

		if (typeof window.tc_ATinternet_ConsentMode === "function")
			window.tc_ATinternet_ConsentMode(window.ATTag);
		
		window.ATTag.mvTesting.set({
			test: experiment.id + '[' + experiment.name+ ']',
			waveId: experiment.id,
			creation: associatedVariation.id + '[' + associatedVariation.name + ']'
		});
		
		window.ATTag.dispatch();
	}
	else
		setTimeout(function (){kameleoonAtMvtFunction(event);}, 250);
};

window.addEventListener('Kameleoon::ExperimentActivated', function (event) {
	kameleoonAtMvtFunction(event);
});