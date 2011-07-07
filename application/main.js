enyo.kind({
   name: "main",
   kind: enyo.Control,
   components: [
      {content: "Hello world"},
      {
         name: "oauth",
         kind: "enyo.PalmService",
         service: "palm://com.ddluk.oauthtest.oauth/",
         subscribe: true,
         timeout: 10000
      }
   ]
});
