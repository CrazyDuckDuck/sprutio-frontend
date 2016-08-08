// Generated by CoffeeScript 1.9.3
Ext.define('FM.action.OpenWebDav', {
  extend: 'FM.overrides.Action',
  config: {
    iconCls: "fm-action-open-webdav",
    text: t("Open"),
    handler: function(panel, session) {
      FM.Logger.info('Run Action FM.action.OpenWebDav', panel, session);
      FM.helpers.SetLoading(panel.body, t("Loading..."));
      return FM.backend.ajaxSend('/actions/main/init_session', {
        params: {
          session: session
        },
        success: function(response) {
          var listing, response_data;
          response_data = Ext.util.JSON.decode(response.responseText).data;
          listing = response_data.listing;
          if (listing.path !== '/') {
            listing.items.unshift({
              name: "..",
              is_dir: true
            });
          }
          return FM.getApplication().fireEvent(FM.Events.main.initSession, response_data, [panel]);
        },
        failure: function(response) {
          FM.helpers.UnsetLoading(panel.body);
          FM.Logger.debug(response);
          FM.helpers.ShowError(t("Unable to open webdav connection.<br/> Check webdav credentials and try again."));
          return FM.Logger.error(response);
        }
      });
    }
  }
});
