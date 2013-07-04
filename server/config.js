Accounts.loginServiceConfiguration.remove({
		service: "github"
});

Accounts.loginServiceConfiguration.insert({
		service: "github",
		//clientId: "95113b0120e584254200",
		clientId: Meteor.settings.githubClientID,
		//secret: "9906710b2836c3beb35b782e9c7687deeb2abc8f"
		secret: Meteor.settings.githubSecret
});
