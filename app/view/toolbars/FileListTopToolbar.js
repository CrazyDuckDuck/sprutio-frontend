// Generated by CoffeeScript 1.9.3
Ext.define('FM.view.toolbars.FileListTopToolbar', {
  extend: 'Ext.toolbar.Toolbar',
  alias: 'widget.file-list-top-toolbar',
  cls: 'fm-file-list-top-toolbar',
  items: [],
  requires: ['Ext.ux.container.SwitchButtonSegment', 'FM.view.toolbars.FileListPathBar'],
  height: 40,
  defaults: {
    margin: 0
  },
  initComponent: function() {
    var segment;
    FM.Logger.log('FM.view.toolbars.FileListTopToolbar');
    this.items = [];
    this.items.push({
      xtype: 'button',
      text: t("Home server"),
      iconCls: "fm-action-home",
      cls: 'fm-source-button',
      margin: '0 10 0 0',
      menu: {
        xtype: 'menu',
        items: [
          {
            text: FM.Actions.HomeFtp.getMenuText(),
            iconCls: FM.Actions.HomeFtp.getIconCls(),
            handler: function() {
              return FM.Actions.HomeFtp.execute(FM.Active);
            }
          }, {
            text: FM.Actions.Local.getMenuText(),
            iconCls: FM.Actions.Local.getIconCls(),
            handler: function() {
              return FM.Actions.Local.execute(FM.Active);
            }
          }, {
            text: FM.Actions.RemoteConnections.getMenuText(),
            iconCls: FM.Actions.RemoteConnections.getIconCls(),
            handler: function() {
              return FM.Actions.RemoteConnections.execute(FM.Active);
            }
          }
        ]
      }
    });
    segment = Ext.create("Ext.ux.container.SwitchButtonSegment", {
      activeItem: 0,
      hidden: true,
      items: [
        {
          cls: 'fm-grid-view',
          viewMode: "default",
          iconCls: "fm-view-default"
        }, {
          cls: 'fm-grid-view',
          viewMode: "tileIcons",
          iconCls: "fm-view-tile"
        }, {
          cls: 'fm-grid-view',
          viewMode: "mediumIcons",
          iconCls: "fm-view-medium"
        }, {
          cls: 'fm-grid-view',
          viewMode: "largeIcons",
          iconCls: "fm-view-large"
        }
      ],
      listeners: {
        change: (function(_this) {
          return function(btn) {
            var panel;
            panel = _this.ownerCt;
            FM.Logger.debug('change', arguments, panel);
            return panel.filelist.getView().focus();
          };
        })(this)
      }
    });
    this.items.push(FM.Actions.Root);
    this.items.push(FM.Actions.Up);
    this.items.push({
      xtype: 'file-list-path-bar'
    });
    this.items.push("->");
    this.items.push(segment);
    return this.callParent(arguments);
  }
});
