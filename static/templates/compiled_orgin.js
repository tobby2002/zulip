(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['actions_popover_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li>\n    <a href=\"#\" class=\"popover_edit_message\" data-msgid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"icon-vector-pencil\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options)))
    + "\n    </a>\n  </li>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "icon-vector-plus";
  }

function program5(depth0,data) {
  
  
  return "icon-vector-minus";
  }

function program7(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Un-collapse", options) : helperMissing.call(depth0, "t", "Un-collapse", options)));
  }

function program9(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Collapse", options) : helperMissing.call(depth0, "t", "Collapse", options)));
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li>\n    <a href=\"#\" class=\"popover_mute_topic\" data-msg-stream=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.stream)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-msg-topic=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.subject)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"icon-vector-eye-close\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "tr", (depth0 && depth0.message), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  ";
  return buffer;
  }
function program12(depth0,data) {
  
  
  return "Mute the topic <b>__subject__</b>";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li>\n    <a href=\"#\" class=\"popover_unmute_topic\" data-msg-stream=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.stream)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-msg-topic=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.subject)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"icon-vector-eye-open\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "tr", (depth0 && depth0.message), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  ";
  return buffer;
  }
function program15(depth0,data) {
  
  
  return "Unmute the topic <b>__subject__</b>";
  }

  buffer += "\n<ul class=\"nav nav-list actions_popover pull-right\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_edit_message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <li>\n    <a href=\"#\" class=\"respond_button\">\n      <i class=\"icon-vector-share-alt\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Reply", options) : helperMissing.call(depth0, "t", "Reply", options)))
    + "\n    </a>\n  </li>\n\n  <li>\n    <a href=\"#\" class=\"popover_toggle_collapse\" data-msgid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.collapsed), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i>\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.collapsed), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_mute_topic), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_unmute_topic), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <li>\n    <a href=\"";
  if (helper = helpers.conversation_time_uri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conversation_time_uri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"popover_narrow_by_conversation_and_time\" data-msgid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"icon-vector-link\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Link to this conversation", options) : helperMissing.call(depth0, "t", "Link to this conversation", options)))
    + "\n    </a>\n  </li>\n\n</ul>\n";
  return buffer;
  });
templates['admin_default_streams_list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr class=\"default_stream_row\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <td>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <span class=\"default_stream_name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </td>\n  <td>\n      <button class=\"button remove-default-stream btn-danger\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Remove from default", options) : helperMissing.call(depth0, "t", "Remove from default", options)))
    + "\n      </button>\n  </td>\n</tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<i class=\"icon-vector-lock \"></i>";
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.stream), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['admin_emoji_list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr class=\"emoji_row\" id=\"emoji_";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <td>\n    <span class=\"emoji_name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </td>\n  <td>\n    <span class=\"emoji_image\"><a href=\"";
  if (helper = helpers.source_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.source_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (helper = helpers.display_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></a></span>\n  </td>\n  <td>\n    <button class=\"button delete btn-danger\" data-emoji-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options)))
    + "\n    </button>\n  </td>\n</tr>\n";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.emoji), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['admin_streams_list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr class=\"stream_row\">\n  <td>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <span class=\"stream_name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </td>\n  <td>\n      <button class=\"button deactivate btn-danger\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Delete stream", options) : helperMissing.call(depth0, "t", "Delete stream", options)))
    + "\n      </button>\n  </td>\n</tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<i class=\"icon-vector-lock \"></i>";
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.stream), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['admin_tab'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

function program3(depth0,data) {
  
  
  return "If checked, only users with an @__domain__ e-mail address will be able to join the organization.";
  }

function program5(depth0,data) {
  
  
  return "Users restricted to __domain__";
  }

function program7(depth0,data) {
  
  
  return "control-label-disabled";
  }

function program9(depth0,data) {
  
  
  return "disabled=\"disabled\"";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <option value='"
    + escapeExpression(((stack1 = (depth0 && depth0.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                  ";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "Add extra emoji for members of the __realm_name__ organization.";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "Configure the default streams new users are subscribed to when joining the ";
  if (helper = helpers.domain) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.domain); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " organization.";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "By deactivating <strong><span class=\"user_name\"></span></strong> &lt;<span class=\"email\"></span>&gt;, they will be logged out immediately.";
  }

  buffer += "<div class=\"row-fluid\">\n  <div class=\"span12\">\n    <div class=\"administration\">\n      <div class=\"alert\" id=\"administration-status\"></div>\n      <h1><i class=\"icon-vector-bolt administration-icon\"></i>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Administration", options) : helperMissing.call(depth0, "t", "Administration", options)))
    + "</h1>\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\">\n          <a href=\"#organization\" aria-controls=\"organization\" role=\"tab\" data-toggle=\"tab\"><i class=\"icon-vector-gear settings-section-icon\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Organization settings", options) : helperMissing.call(depth0, "t", "Organization settings", options)))
    + "</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"#users\" aria-controls=\"users\" role=\"tab\" data-toggle=\"tab\"><i class=\"icon-vector-user settings-section-icon\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Users", options) : helperMissing.call(depth0, "t", "Users", options)))
    + "</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"#deactivated-users\" aria-controls=\"deactivated-users\" role=\"tab\" data-toggle=\"tab\"><i class=\"icon-vector-trash settings-section-icon\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Deactivated Users", options) : helperMissing.call(depth0, "t", "Deactivated Users", options)))
    + "</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"#bots\" aria-controls=\"bots\" role=\"tab\" data-toggle=\"tab\"><i class=\"icon-vector-github settings-section-icon\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Bots", options) : helperMissing.call(depth0, "t", "Bots", options)))
    + "</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"#streams\" aria-controls=\"streams\" role=\"tab\" data-toggle=\"tab\"><i class=\"icon-vector-exchange settings-section-icon\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Streams Deletion", options) : helperMissing.call(depth0, "t", "Streams Deletion", options)))
    + "</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"#default-streams\" aria-controls=\"default-streams\" role=\"tab\" data-toggle=\"tab\"><i class=\"icon-vector-exchange settings-section-icon\"></i> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Default Streams", options) : helperMissing.call(depth0, "t", "Default Streams", options)))
    + "</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"organization\">\n          <div id=\"organization-settings\" class=\"settings-section\">\n          <div class=\"settings-section-title\"><i class=\"icon-vector-gear settings-section-icon\"></i>\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Organization settings", options) : helperMissing.call(depth0, "t", "Organization settings", options)))
    + "</div>\n            <form class=\"form-horizontal admin-realm-form\">\n              <div class=\"alert\" id=\"admin-realm-name-status\"></div>\n              <div class=\"alert\" id=\"admin-realm-restricted-to-domain-status\"></div>\n              <div class=\"alert\" id=\"admin-realm-invite-required-status\"></div>\n              <div class=\"alert\" id=\"admin-realm-invite-by-admins-only-status\"></div>\n              <div class=\"alert\" id=\"admin-realm-create-stream-by-admins-only-status\"></div>\n              <div class=\"alert\" id=\"admin-realm-message-editing-status\"></div>\n              <div class=\"alert\" id=\"admin-realm-default-language-status\"></div>\n\n              <div class=\"input-group admin-realm\">\n                <label for=\"realm_name\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Your organization's name", options) : helperMissing.call(depth0, "t", "Your organization's name", options)))
    + "</label>\n                <input type=\"text\" id=\"id_realm_name\" name=\"realm_name\" class=\"admin-realm-name\"\n                       value=\"";
  if (helper = helpers.realm_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.realm_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n              </div>\n              <div class=\"input-group\">\n                <input type=\"checkbox\" class=\"inline-block\" id=\"id_realm_restricted_to_domain\" name=\"realm_restricted_to_domain\"\n                   ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realm_restricted_to_domain), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n                <label for=\"id_realm_restricted_to_domain\" class=\"inline-block\"\n                  title=\"";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                  ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </label>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"checkbox\" class=\"inline-block\" id=\"id_realm_invite_required\" name=\"realm_invite_required\"\n                  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realm_invite_required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n                <label for=\"id_realm_invite_required\" class=\"inline-block\"\n                  title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "If checked, users must be invited in order to join your organization.", options) : helperMissing.call(depth0, "t", "If checked, users must be invited in order to join your organization.", options)))
    + "\">\n                  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "E-mail invitation required", options) : helperMissing.call(depth0, "t", "E-mail invitation required", options)))
    + "\n                </label>\n              </div>\n              <div class=\"input-group disableable ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.realm_invite_required), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <input type=\"checkbox\" class=\"inline-block\" id=\"id_realm_invite_by_admins_only\" name=\"realm_invite_by_admins_only\"\n                  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.realm_invite_required), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realm_invite_by_admins_only), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n                <label for=\"id_realm_invite_by_admins_only\"\n                  id=\"id_realm_invite_by_admins_only_label\"\n                  title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "If checked, only administrators may invite new users.", options) : helperMissing.call(depth0, "t", "If checked, only administrators may invite new users.", options)))
    + "\"\n                  class=\"inline-block\">\n                  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Only admins may invite", options) : helperMissing.call(depth0, "t", "Only admins may invite", options)))
    + "\n                </label>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"checkbox\" class=\"inline-block\" id=\"id_realm_create_stream_by_admins_only\"\n                       name=\"realm_create_stream_by_admins_only\"\n                  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realm_create_stream_by_admins_only), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n\n                <label for=\"id_realm_create_stream_by_admins_only\" class=\"inline-block\"\n                  id=\"id_realm_create_stream_by_admins_only_label\"\n                  title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "If checked, only administrators may create new streams.", options) : helperMissing.call(depth0, "t", "If checked, only administrators may create new streams.", options)))
    + "\">\n                  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Only admins may create streams", options) : helperMissing.call(depth0, "t", "Only admins may create streams", options)))
    + "\n                </label>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"checkbox\" class=\"inline-block\" id=\"id_realm_allow_message_editing\" name=\"realm_allow_message_editing\"\n                  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realm_allow_message_editing), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n\n                <label for=\"id_realm_allow_message_editing\"\n                  title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "If checked, users can edit the content and topics of their old messages.", options) : helperMissing.call(depth0, "t", "If checked, users can edit the content and topics of their old messages.", options)))
    + "\"\n                  class=\"inline-block\">\n                  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Users can edit old messages", options) : helperMissing.call(depth0, "t", "Users can edit old messages", options)))
    + "\n                </label>\n              </div>\n              <div class=\"input-group disableable ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.realm_allow_message_editing), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <label for=\"realm_message_content_edit_limit_minutes\"\n                  id=\"id_realm_message_content_edit_limit_minutes_label\"\n                  title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "If non-zero, users can edit their message for this many minutes after it is sent. If zero, users can edit all their past messages.", options) : helperMissing.call(depth0, "t", "If non-zero, users can edit their message for this many minutes after it is sent. If zero, users can edit all their past messages.", options)))
    + "\">\n                  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Message edit limit in minutes (0 for no limit)", options) : helperMissing.call(depth0, "t", "Message edit limit in minutes (0 for no limit)", options)))
    + "\n                </label>\n                <input type=\"text\" id=\"id_realm_message_content_edit_limit_minutes\"\n                       name=\"realm_message_content_edit_limit_minutes\"\n                       class=\"admin-realm-message-content-edit-limit-minutes\"\n                       value=\"";
  if (helper = helpers.realm_message_content_edit_limit_minutes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.realm_message_content_edit_limit_minutes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.realm_allow_message_editing), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n              </div>\n              <div class=\"input-group\">\n                <label for=\"realm_default_language\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Default Language", options) : helperMissing.call(depth0, "t", "Default Language", options)))
    + ":</label>\n                <select name=\"realm_default_language\" id=\"id_realm_default_language\">\n                  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.language_list), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </select>\n              </div>\n              <div class=\"input-group organization-submission\">\n                <input type=\"submit\" class=\"button\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Save changes", options) : helperMissing.call(depth0, "t", "Save changes", options)))
    + "\" />\n              </div>\n            </form>\n          </div>\n          <div id=\"emoji-settings\" class=\"settings-section\">\n            <div class=\"settings-section-title\"><i class=\"icon-vector-smile settings-section-icon\"></i>\n            "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Custom emoji", options) : helperMissing.call(depth0, "t", "Custom emoji", options)))
    + "</div>\n            <div class=\"admin-table-wrapper\">\n            <p>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n              <table class=\"table table-condensed table-striped admin_emoji_table\">\n                <tbody id=\"admin_emoji_table\">\n                  <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Name", options) : helperMissing.call(depth0, "t", "Name", options)))
    + "</th>\n                  <th class=\"image\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Image", options) : helperMissing.call(depth0, "t", "Image", options)))
    + "</th>\n                  <th class=\"actions\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options)))
    + "</th>\n                </tbody>\n              </table>\n            </div>\n            <form class=\"form-horizontal admin-emoji-form\">\n              <div class=\"add-new-emoji-box grey-bg green-bg\">\n                <div class=\"new-emoji-form\">\n                  <div class=\"settings-section-title new-emoji-section-title no-padding\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Add a New Emoji", options) : helperMissing.call(depth0, "t", "Add a New Emoji", options)))
    + "</div>\n                  <div class=\"alert\" id=\"admin-emoji-status\"></div>\n                  <div class=\"input-group\">\n                    <label for=\"emoji_name\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Emoji name", options) : helperMissing.call(depth0, "t", "Emoji name", options)))
    + "</label>\n                    <input type=\"text\" name=\"name\" id=\"emoji_name\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "mouse_face", options) : helperMissing.call(depth0, "t", "mouse_face", options)))
    + "\" />\n                    <div class=\"alert\" id=\"admin-emoji-name-status\"></div>\n                  </div>\n                  <div class=\"input-group\">\n                    <label for=\"emoji_url\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Emoji URL", options) : helperMissing.call(depth0, "t", "Emoji URL", options)))
    + "</label>\n                    <input type=\"text\" name=\"url\" id=\"emoji_url\" placeholder=\"http://emojipedia-us.s3.amazonaws.com/cache/46/7f/467fe69069c408e07517621f263ea9b5.png\" />\n                    <div class=\"alert\" id=\"admin-emoji-url-status\"></div>\n                  </div>\n                  <input type=\"submit\" class=\"button\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Add emoji", options) : helperMissing.call(depth0, "t", "Add emoji", options)))
    + "\" />\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"users\">\n          <div id=\"admin-user-list\" class=\"settings-section\">\n          <div class=\"settings-section-title\"><i class=\"icon-vector-user settings-section-icon\"></i>\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Users", options) : helperMissing.call(depth0, "t", "Users", options)))
    + "</div>\n          <table class=\"table table-condensed table-striped\">\n            <tbody id=\"admin_users_table\" class=\"admin_user_table\">\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Name", options) : helperMissing.call(depth0, "t", "Name", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email", options) : helperMissing.call(depth0, "t", "Email", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options)))
    + "</th>\n            </tbody>\n          </table>\n          <div id=\"admin_page_users_loading_indicator\"></div>\n          </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"deactivated-users\">\n          <div id=\"admin-deactivated-users-list\" class=\"settings-section\">\n          <div class=\"settings-section-title\"><i class=\"icon-vector-trash settings-section-icon\"></i>\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Deactivated Users", options) : helperMissing.call(depth0, "t", "Deactivated Users", options)))
    + "</div>\n          <table class=\"table table-condensed table-striped\">\n            <tbody id=\"admin_deactivated_users_table\" class=\"admin_user_table\">\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Name", options) : helperMissing.call(depth0, "t", "Name", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email", options) : helperMissing.call(depth0, "t", "Email", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options)))
    + "</th>\n            </tbody>\n          </table>\n          <div id=\"admin_page_deactivated_users_loading_indicator\"></div>\n          </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"bots\">\n          <div id=\"admin-user-list\" class=\"settings-section\">\n          <div class=\"settings-section-title\"><i class=\"icon-vector-github settings-section-icon\"></i>\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Bots", options) : helperMissing.call(depth0, "t", "Bots", options)))
    + "</div>\n          <table class=\"table table-condensed table-striped\">\n            <tbody id=\"admin_bots_table\" class=\"admin_bot_table\">\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Name", options) : helperMissing.call(depth0, "t", "Name", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email", options) : helperMissing.call(depth0, "t", "Email", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Owner", options) : helperMissing.call(depth0, "t", "Owner", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options)))
    + "</th>\n            </tbody>\n          </table>\n          <div id=\"admin_page_bots_loading_indicator\"></div>\n          </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"streams\">\n          <div id=\"admin-streams-list\" class=\"settings-section\">\n          <div class=\"settings-section-title\"><i class=\"icon-vector-exchange settings-section-icon\"></i>\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Streams Deletion", options) : helperMissing.call(depth0, "t", "Streams Deletion", options)))
    + "</div>\n\n          <div class=\"side-padded-container\">\n            <p class=\"admin-streams-note\">Most stream administration is done on the <a href=\"/#subscriptions\">subscriptions page</a>.</p>\n          </div>\n\n          <table class=\"table table-condensed table-striped\">\n            <tbody id=\"admin_streams_table\" class=\"admin_stream_table\">\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Name", options) : helperMissing.call(depth0, "t", "Name", options)))
    + "</th>\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options)))
    + "</th>\n            </tbody>\n          </table>\n          <div id=\"admin_page_streams_loading_indicator\"></div>\n          </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"default-streams\">\n          <div id=\"admin-default-streams-list\" class=\"settings-section\">\n          <div class=\"settings-section-title\"><i class=\"icon-vector-exchange settings-section-icon\"></i>\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Default Streams", options) : helperMissing.call(depth0, "t", "Default Streams", options)))
    + "</div>\n\n          <div class=\"side-padded-container\">\n            <p>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n          </div>\n\n          <table class=\"table table-condensed table-striped\">\n            <tbody id=\"admin_default_streams_table\" class=\"admin_default_stream_table\">\n              <th>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Name", options) : helperMissing.call(depth0, "t", "Name", options)))
    + "</th>\n              <th class=\"actions\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options)))
    + "</th>\n            </tbody>\n          </table>\n\n          <div id=\"admin_page_default_streams_loading_indicator\"></div>\n            <form class=\"form-horizontal default-stream-form\">\n              <div class=\"add-new-default-stream-box grey-bg green-bg\">\n                <div class=\"new-default-stream-section-title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Add New Default Stream", options) : helperMissing.call(depth0, "t", "Add New Default Stream", options)))
    + "</div>\n                <div class=\"control-group\" id=\"default_stream_inputs\">\n                  <label for=\"default_stream_name\" class=\"control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream Name", options) : helperMissing.call(depth0, "t", "Stream Name", options)))
    + "</label>\n                  <input class=\"create_default_stream\" type=\"text\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream Name", options) : helperMissing.call(depth0, "t", "Stream Name", options)))
    + "\" name=\"stream_name\" autocomplete=\"off\"></input>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"deactivation_user_modal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deactivation_user_modal_label\" aria-hidden=\"true\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n          <h3 id=\"deactivation_user_modal_label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Deactivate", options) : helperMissing.call(depth0, "t", "Deactivate", options)))
    + " <span class=\"email\"></span></h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n          <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Their password will be cleared from our systems, and any bots they maintain will be disabled.", options) : helperMissing.call(depth0, "t", "Their password will be cleared from our systems, and any bots they maintain will be disabled.", options)))
    + "</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options)))
    + "</button>\n          <button class=\"button btn-danger\" id=\"do_deactivate_user_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Deactivate now", options) : helperMissing.call(depth0, "t", "Deactivate now", options)))
    + "</button>\n        </div>\n      </div>\n      <div id=\"deactivation_stream_modal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deactivation_stream_modal_label\" aria-hidden=\"true\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n          <h3 id=\"deactivation_stream_modal_label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Delete stream", options) : helperMissing.call(depth0, "t", "Delete stream", options)))
    + " <span class=\"stream_name\"></span></h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Deleting this stream will immediately unsubscribe everyone, and the stream's content will not be recoverable.", options) : helperMissing.call(depth0, "t", "Deleting this stream will immediately unsubscribe everyone, and the stream's content will not be recoverable.", options)))
    + " <strong>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Are you sure you want to do this?", options) : helperMissing.call(depth0, "t", "Are you sure you want to do this?", options)))
    + "</strong></p>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options)))
    + "</button>\n          <button class=\"button btn-danger\" id=\"do_deactivate_stream_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Yes, delete this stream", options) : helperMissing.call(depth0, "t", "Yes, delete this stream", options)))
    + "</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
templates['admin_user_list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<tr class=\"user_row\" id=\"user_";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <td>\n    <span class=\"user_name\">";
  if (helper = helpers.full_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.full_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </td>\n  <td>\n    <span class=\"email\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_bot), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <td>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_active), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"user-admin-settings\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_active_human), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </span>\n    <div class='admin-user-status'>\n    </div>\n  </td>\n</tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <td>\n      <span class=\"owner\">";
  if (helper = helpers.bot_owner) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bot_owner); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </td>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n      <button class=\"button deactivate btn-danger\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Deactivate", options) : helperMissing.call(depth0, "t", "Deactivate", options)))
    + "\n      </button>\n    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n      <button class=\"button reactivate btn-warning\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Reactivate", options) : helperMissing.call(depth0, "t", "Reactivate", options)))
    + "\n      </button>\n    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_admin), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n          <button class=\"button remove-admin btn-danger\">\n            "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Remove admin", options) : helperMissing.call(depth0, "t", "Remove admin", options)))
    + "\n          </button>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n          <button class=\"button make-admin btn-warning\">\n            "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Make admin", options) : helperMissing.call(depth0, "t", "Make admin", options)))
    + "\n          </button>\n        ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['alert_word_settings_item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        <div class=\"alert-word-settings-form\">\n            <div class=\"add-new-alert-word-box grey-bg green-bg\">\n                <form id=\"create_alert_word_form\" class=\"form-horizontal no-padding\">\n                    <h4 class=\"new-alert-word-section-title light no-margin\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Add a New Alert Word", options) : helperMissing.call(depth0, "t", "Add a New Alert Word", options)))
    + "</h4>\n                    <div class=\"new-alert-word-form\">\n                        <div class=\"input-group\">\n                            <label for=\"create_alert_word_name\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "New Alert Word", options) : helperMissing.call(depth0, "t", "New Alert Word", options)))
    + "</label>\n                            <input type=\"text\" name=\"alert_word_name\" id=\"create_alert_word_name\" class=\"required\"\n                                maxlength=100 placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Alert Word", options) : helperMissing.call(depth0, "t", "Alert Word", options)))
    + "\" value=\"\" />\n                        </div>\n                        <div class=\"alert alert-danger\" id=\"empty_alert_word_error\" role=\"alert\">\n                            <button type=\"button\" class=\"close close-empty-alert-word-error\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                            <span>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Alert words can't be empty!", options) : helperMissing.call(depth0, "t", "Alert words can't be empty!", options)))
    + "</span>\n                        </div>\n                        <button class=\"button add-alert-word\" id=\"create_alert_word_button\" type=\"button\">\n                            "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Add Alert Word", options) : helperMissing.call(depth0, "t", "Add Alert Word", options)))
    + "\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"alert-word-information-box list-container\">\n            <div class=\"alert_word_listing\">\n                <span class=\"value\">";
  if (helper = helpers.word) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.word); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n            <div class=\"edit-alert-word-buttons\">\n                <button type=\"submit\" class=\"button small btn-small btn-danger remove-alert-word\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Delete Alert Word", options) : helperMissing.call(depth0, "t", "Delete Alert Word", options)))
    + "\" data-word=\"";
  if (helper = helpers.word) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.word); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <i class=\"icon-vector-trash\"></i>\n                </button>\n            </div>\n        </div>\n    ";
  return buffer;
  }

  buffer += "\n<li class=\"alert-word-item\" data-word='";
  if (helper = helpers.word) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.word); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editing), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</li>\n";
  return buffer;
  });
templates['announce_stream_docs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n  <p>Lets everyone know about the new stream,<br />\n  even if you don't add them.</p>\n  ";
  }

  buffer += "\n<div>\n\n  ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n";
  return buffer;
  });
templates['bankruptcy_modal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "It's been a while! Since you were last here, you received <b>__unread_count__</b> new messages.";
  }

  buffer += "\n\n<div class=\"modal-body\">\n  <p>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Do you want to skip to your latest messages?", options) : helperMissing.call(depth0, "t", "Do you want to skip to your latest messages?", options)))
    + "</p>\n</div>\n";
  return buffer;
  });
templates['bookend'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.trailing), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " bookend sub-unsub-message\">\n    <span>";
  if (helper = helpers.bookend_content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bookend_content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <div class=\"sub_button_row\">\n        <button class=\"btn stream_sub_unsub_button btn-default\" type=\"button\" name=\"subscription\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n    </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "trailing_bookend";
  }

function program4(depth0,data) {
  
  
  return "\n            Unsubscribe\n            ";
  }

function program6(depth0,data) {
  
  
  return "\n            Subscribe\n            ";
  }

  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.bookend_content), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['bot_avatar_row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li class=\"bot-information-box grey-bg\">\n    <div class=\"image inline-block overflow-hidden\">\n        <img src=\"";
  if (helper = helpers.avatar_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.avatar_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"avatar\" />\n    </div>\n    <div class=\"bot_info inline-block\">\n        <div class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class=\"email\">\n            <span class=\"field\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Username", options) : helperMissing.call(depth0, "t", "Username", options)))
    + "</span>\n            <span class=\"value\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"api_key\">\n            <span class=\"field\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "API Key", options) : helperMissing.call(depth0, "t", "API Key", options)))
    + "</span>\n            <span class=\"api-key-value-and-button\">\n               <span class=\"value\">";
  if (helper = helpers.api_key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.api_key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n               </span>\n               <button type=\"submit\" class=\"button no-style btn-secondary regenerate_bot_api_key\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Generate new API key", options) : helperMissing.call(depth0, "t", "Generate new API key", options)))
    + "\" data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                   <i class=\"icon-vector-refresh\"></i>\n               </button>\n            </span>\n            <div class=\"api_key_error text-error\"></div>\n        </div>\n        <div class=\"edit-bot-buttons\">\n           <button type=\"submit\" class=\"btn btn-primary open_edit_bot_form\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Edit bot", options) : helperMissing.call(depth0, "t", "Edit bot", options)))
    + "\" data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <i class=\"icon-vector-pencil\"></i>\n           </button>\n           <button type=\"submit\" class=\"btn btn-danger delete_bot\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Delete bot", options) : helperMissing.call(depth0, "t", "Delete bot", options)))
    + "\" data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <i class=\"icon-vector-trash\"></i>\n           </button>\n        </div>\n        <div id=\"bot_delete_error";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"alert alert-error hide\"></div>\n    </div>\n    <div class='edit_bot display-none'>\n        <form class=\"edit_bot_form form-horizontal\" data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"bot_edit_errors alert alert-error hide\"></div>\n            <div class=\"edit_bot_email\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"edit-bot-form-box\">\n              <div class=\"control-group\">\n               <label for=\"edit_bot_name";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Full name", options) : helperMissing.call(depth0, "t", "Full name", options)))
    + "</label>\n               <div class=\"controls\">\n                  <input type=\"text\" name=\"bot_name\" id=\"edit_bot_name";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"edit_bot_name required\" maxlength=50 />\n                  <div><label for=\"edit_bot_name";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" generated=\"true\" class=\"text-error\"></label></div>\n               </div>\n              </div>\n              <div class=\"control-group new-bot-ui\">\n                <label for=\"edit_bot_default_sending_stream";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Send to stream", options) : helperMissing.call(depth0, "t", "Send to stream", options)))
    + "</label>\n                <select name=\"bot_default_sending_stream\" class=\"edit_bot_default_sending_stream\" id=\"edit_bot_default_sending_stream";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></select>\n              </div>\n              <div class=\"control-group new-bot-ui\">\n                <label for=\"edit_bot_default_events_register_stream";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Listen on", options) : helperMissing.call(depth0, "t", "Listen on", options)))
    + "</label>\n                <select name=\"bot_default_events_register_stream\" class=\"edit_bot_default_events_register_stream\" id=\"edit_bot_default_events_register_stream";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></select>\n              </div>\n              <div class=\"control-group\">\n               <label for=\"bot_avatar_file_input";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"control-label\">Avatar</label>\n               <input type=\"file\" id=\"bot_avatar_file_input";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"bot_avatar_file_input\" class=\"notvisible edit_bot_avatar_file_input\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Upload avatar", options) : helperMissing.call(depth0, "t", "Upload avatar", options)))
    + "\" />\n                <div class=\"controls\">\n                  <div class=\"edit_bot_avatar_file\"></div>\n                  <button type=\"button\" class=\"btn btn-default edit_bot_avatar_upload_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Choose avatar", options) : helperMissing.call(depth0, "t", "Choose avatar", options)))
    + "</button>\n                  <button type=\"button\" class=\"btn btn-default edit_bot_avatar_clear_button display-none\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Clear avatar", options) : helperMissing.call(depth0, "t", "Clear avatar", options)))
    + "</button>\n                </div>\n               <div><label for=\"edit_bot_avatar_file";
  if (helper = helpers.id_suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" generated=\"true\" class=\"edit_bot_avatar_error text-error\"></label></div>\n              </div>\n              <div class=\"control-group\">\n               <div class=\"controls\">\n                  <input type=\"submit\" class=\"btn btn-primary edit_bot_button\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options)))
    + "\" />\n                  <button type=\"submit\" class=\"btn btn-default reset_edit_bot\">Cancel</button>\n               </div>\n               <div class=\"edit_bot_spinner\"></div>\n              </div>\n            </div>\n        </form>\n    </div>\n</li>\n";
  return buffer;
  });
templates['change_stream_privacy'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <button class=\"btn btn-primary make-stream-public-button\" data-stream-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Make stream public", options) : helperMissing.call(depth0, "t", "Make stream public", options)))
    + "\n  </button>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <button class=\"btn btn-danger make-stream-private-button\" data-stream-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Make stream private", options) : helperMissing.call(depth0, "t", "Make stream private", options)))
    + "\n  </button>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_make_public), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_make_private), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"change-stream-privacy-feedback\"></div>\n";
  return buffer;
  });
templates['compose-invite-users'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "<strong>__name__</strong> is not subscribed to this stream.";
  }

  buffer += "<div class=\"compose_invite_user\" data-useremail=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"compose_invite_user_controls\">\n        <span class=\"compose_invite_user_error alert alert-error\" style=\"display: none;\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Unable to subscribe user", options) : helperMissing.call(depth0, "t", "Unable to subscribe user", options)))
    + "</span>\n        <button href=\"\" class=\"compose_invite_link btn\" >"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Subscribe", options) : helperMissing.call(depth0, "t", "Subscribe", options)))
    + "</button><button type=\"button\" class=\"compose_invite_close close\">×</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates['compose_all_everyone'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Are you sure you want to message all <strong>__count__</strong> people in this stream?";
  }

  buffer += "<div class=\"compose-all-everyone\">\n    <span class=\"compose-all-everyone-msg\">\n        ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </span>\n    <span class=\"compose-all-everyone-controls\">\n        <button type=\"button\" class=\"compose-all-everyone-confirm\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "YES", options) : helperMissing.call(depth0, "t", "YES", options)))
    + "</button>\n    </span>\n</div>\n";
  return buffer;
  });
templates['compose_notification'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"#\" class=\"";
  if (helper = helpers.link_class) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link_class); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-msgid=\"";
  if (helper = helpers.link_msg_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link_msg_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.link_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }

  buffer += "\n<div class=\"compose-notifications-content\">\n    ";
  if (helper = helpers.note) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.note); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.link_class), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <button type=\"button\" class=\"out-of-view-notification-close close\">×</button>\n</div>\n";
  return buffer;
  });
templates['email_address_hint'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "You can send emails to __page_params.product_name__! Just copy and use this address as an email recipient, and:";
  }

function program3(depth0,data) {
  
  
  return "The email subject will become the __page_params.product_name__ topic";
  }

function program5(depth0,data) {
  
  
  return "The email body will become the __page_params.product_name__ message";
  }

  buffer += "\n<div>\n\n<p>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<img class=\"subscription-email-hint-image\" src=\"/static/images/integrations/zulip_mail.png\" />\n\n<ul>\n<li>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "The email will be forwarded to this stream", options) : helperMissing.call(depth0, "t", "The email will be forwarded to this stream", options)))
    + "</li>\n<li>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n<li>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n</ul>\n\n</div>\n";
  return buffer;
  });
templates['group_pms'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<li data-emails=\"";
  if (helper = helpers.emails) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emails); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"group-pms-sidebar-entry narrow-filter\">\n  <span class=\"selectable_sidebar_block\">\n    <span class=\"group-pm-status-indicator\" style=\"background:rgba(68,194,29,";
  if (helper = helpers.fraction_present) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fraction_present); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ");\"></span>\n    <a href=\"#\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"group-pm-link\">";
  if (helper = helpers.short_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.short_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </span>\n  <span class=\"count\"><span class=\"value\"></span></span>\n</li>\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.group_pms), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['invite_subscription'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" name=\"stream\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " /> ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

function program4(depth0,data) {
  
  
  return "<i class=\"icon-vector-lock\"></i>";
  }

  buffer += "\n<a href=\"#\" class=\"invite_check_all_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Check all", options) : helperMissing.call(depth0, "t", "Check all", options)))
    + "</a> |\n<a href=\"#\" class=\"invite_uncheck_all_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Uncheck all", options) : helperMissing.call(depth0, "t", "Uncheck all", options)))
    + "</a>\n<div id=\"stream-checkboxes\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.streams), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  return buffer;
  });
templates['message_edit_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"control-group no-margin\">\n        <label class=\"control-label edit-control-label\" for=\"message_edit_topic\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Topic", options) : helperMissing.call(depth0, "t", "Topic", options)))
    + "</label>\n        <div class=\"controls edit-controls\">\n          <input type=\"text\" value=\"";
  if (helper = helpers.topic) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"message_edit_topic\" id=\"message_edit_topic\" />\n          <select class='message_edit_topic_propagate' style='display:none;'>\n            <option selected=\"selected\" value=\"change_one\"> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Change only this message topic", options) : helperMissing.call(depth0, "t", "Change only this message topic", options)))
    + "</option>\n            <option value=\"change_later\"> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Change later messages to this topic", options) : helperMissing.call(depth0, "t", "Change later messages to this topic", options)))
    + "</option>\n            <option value=\"change_all\"> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Change previous and following messages to this topic", options) : helperMissing.call(depth0, "t", "Change previous and following messages to this topic", options)))
    + "</option>\n          </select>\n        </div>\n    </div>\n";
  return buffer;
  }

  buffer += "\n\n<form id=\"message_edit_form\" class=\"form-horizontal\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_stream), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"control-group\">\n        <div class=\"controls edit-controls\">\n            <textarea class=\"message_edit_content\" id=\"message_edit_content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n        </div>\n    </div>\n    <div class=\"control-group\">\n        <div class=\"controls edit-controls\">\n            <button type=\"button\" class=\"message_edit_save btn btn-primary btn-small\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options)))
    + "</button>\n            <button type=\"button\" class=\"message_edit_cancel btn btn-default btn-small\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options)))
    + "</button>\n            <div class=\"message-edit-timer-control-group\">\n                <span class=\"message_edit_countdown_timer\"></span>\n                <span><i id=\"message_edit_tooltip\" class=\"message_edit_tooltip icon-vector-question-sign\" data-toggle=\"tooltip\"\n                         title=\"Message content can only be edited for ";
  if (helper = helpers.minutes_to_edit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.minutes_to_edit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " minutes after it is sent.\"></i>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"alert alert-error edit_error hide\"></div>\n</form>\n";
  return buffer;
  });
templates['message_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers['with'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_date), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.bookend_top), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"recipient_row\" id=\"";
  if (helper = helpers.message_group_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message_group_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  "
    + escapeExpression((helper = helpers.partial || (depth2 && depth2.partial),options={hash:{},data:data},helper ? helper.call(depth0, "recipient_row", "use_match_properties", (depth2 && depth2.use_match_properties), options) : helperMissing.call(depth0, "partial", "recipient_row", "use_match_properties", (depth2 && depth2.use_match_properties), options)))
    + "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.message_containers), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.bookend_bottom), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"date_row\">";
  if (helper = helpers.show_date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.show_date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n"
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "bookend", options) : helperMissing.call(depth0, "partial", "bookend", options)))
    + "\n";
  return buffer;
  }

function program7(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['with'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth3),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program8(depth0,data,depth4) {
  
  var buffer = "", helper, options;
  buffer += "\n    "
    + escapeExpression((helper = helpers.partial || (depth4 && depth4.partial),options={hash:{},data:data},helper ? helper.call(depth0, "single_message", "use_match_properties", (depth4 && depth4.use_match_properties), "table_name", (depth4 && depth4.table_name), options) : helperMissing.call(depth0, "partial", "single_message", "use_match_properties", (depth4 && depth4.use_match_properties), "table_name", (depth4 && depth4.table_name), options)))
    + "\n  ";
  return buffer;
  }

  buffer += "\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.message_groups), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['message_info_popover_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "Sent by <b>__message.sender_full_name__</b>";
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <li class=\"small\">("
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Message sent when you were not subscribed", options) : helperMissing.call(depth0, "t", "Message sent when you were not subscribed", options)))
    + ")</li>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "Send __message.sender_full_name__ a private message";
  }

function program7(depth0,data) {
  
  
  return "Narrow to private messages with __message.sender_full_name__";
  }

function program9(depth0,data) {
  
  
  return "Narrow to messages sent by __message.sender_full_name__";
  }

  buffer += "\n<ul class=\"nav nav-list actions_popover sender_info_popover\" data-email=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.sender_email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <div class=\"popover_info\">\n    <li>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    <li class='my_email'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.sender_email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    <hr />\n\n    <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.full_date_str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.full_time_str)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.historical), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <hr />\n  <li>\n    <a href=\"#\" class=\"respond_personal_button\">\n      <i class=\"icon-vector-edit\"></i> ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a href=\"";
  if (helper = helpers.pm_with_uri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pm_with_uri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"narrow_to_private_messages\">\n      <i class=\"icon-vector-user\"></i> ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a href=\"";
  if (helper = helpers.sent_by_uri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sent_by_uri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"narrow_to_messages_sent\">\n      <i class=\"icon-vector-bullhorn\"></i> ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n</ul>\n";
  return buffer;
  });
templates['message_info_popover_title'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Message to stream <b>__message.stream__</b>";
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Private message", options) : helperMissing.call(depth0, "t", "Private message", options)))
    + "\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.message)),stack1 == null || stack1 === false ? stack1 : stack1.is_stream), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['new_stream_users'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <label class=\"checkbox\" data-name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <input type=\"checkbox\" name=\"user\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /> "
    + escapeExpression(((stack1 = (depth0 && depth0.full_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = (depth0 && depth0.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n  </label>\n  ";
  return buffer;
  }

  buffer += "\n<a href=\"#\" class=\"subs_set_all_users\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Check all", options) : helperMissing.call(depth0, "t", "Check all", options)))
    + "</a> |\n<a href=\"#\" class=\"subs_unset_all_users\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Uncheck all", options) : helperMissing.call(depth0, "t", "Uncheck all", options)))
    + "</a>\n<input class=\"add-user-list-filter\" name=\"user_list_filter\" type=\"text\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Filter users", options) : helperMissing.call(depth0, "t", "Filter users", options)))
    + "\" />\n<div id=\"user-checkboxes\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.users), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
templates['notification'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div>\n    <div class=\"notifications-gravatar\">\n        <img src=\"";
  if (helper = helpers.gravatar_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gravatar_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </div>\n    <div class=\"notifications-content\">\n        <div class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n";
  return buffer;
  });
templates['propagate_notification_change'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div>\n    <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Apply this change to all stream subscriptions?", options) : helperMissing.call(depth0, "t", "Apply this change to all stream subscriptions?", options)))
    + "</p>\n\n    <div class=\"control-group\">\n        <div class=\"controls propagate-notifications-controls\">\n            <button type=\"button\"\n                    class=\"yes_propagate_notifications btn btn-primary btn-small\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Yes", options) : helperMissing.call(depth0, "t", "Yes", options)))
    + "</button>\n            <button type=\"button\"\n                    class=\"no_propagate_notifications btn btn-default btn-small\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "No", options) : helperMissing.call(depth0, "t", "No", options)))
    + "</button>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });
templates['recipient_row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"message_header message_header_stream right_part\">\n    <div class=\"message-header-wrapper\">\n      <div class=\"message-header-contents\">\n        \n        <a class=\"message_label_clickable narrows_by_recipient stream_label ";
  if (helper = helpers.color_class) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color_class); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           style=\"background: ";
  if (helper = helpers.background_color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.background_color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "; border-left-color: ";
  if (helper = helpers.background_color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.background_color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ";\"\n           href=\"";
  if (helper = helpers.stream_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           title=\"";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n           \n           ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n             ";
  if (helper = helpers.display_recipient) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_recipient); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </a>\n\n        \n        <span class=\"copy-paste-text\">&gt;</span>\n\n        \n        <span class=\"stream_topic\">\n          \n          <a class=\"message_label_clickable narrows_by_subject\"\n             href=\"";
  if (helper = helpers.topic_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n             title=\"";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.use_match_properties), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n\n          \n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.always_visible_topic_edit), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n          \n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subject_links), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n\n        <span class=\"topic_edit\">\n          <span class=\"topic_edit_form\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n        </span>\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Narrow to stream &quot;__display_recipient__&quot;";
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n             <i class=\"icon-vector-lock invite-stream-icon\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "This is an invite-only stream", options) : helperMissing.call(depth0, "t", "This is an invite-only stream", options)))
    + "\"></i>\n           ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "Narrow to stream &quot;__display_recipient__&quot;, topic &quot;__subject__&quot;";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              ";
  if (helper = helpers.match_subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.match_subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              ";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n            <i class=\"icon-vector-pencil always_visible_topic_edit\"></i>\n          ";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.on_hover_topic_edit), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program15(depth0,data) {
  
  
  return "\n            <i class=\"icon-vector-pencil on_hover_topic_edit\"></i>\n            ";
  }

function program17(depth0,data) {
  
  var buffer = "";
  buffer += "\n          <a href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" target=\"_blank\">\n            <i class=\"icon-vector-external-link-sign\"></i>\n          </a>\n          ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"message_header message_header_private_message dark_background\">\n    <div class=\"message-header-wrapper\">\n      <div class=\"message-header-contents\">\n        <a class=\"message_label_clickable narrows_by_recipient\"\n           href=\"";
  if (helper = helpers.pm_with_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pm_with_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           title=\"";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  }
function program20(depth0,data) {
  
  
  return "Narrow to your private messages with __display_reply_to__";
  }

function program22(depth0,data) {
  
  
  return "You and __display_reply_to__";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_stream), {hash:{},inverse:self.program(19, program19, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['settings_tab'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        <div class=\"input-group\" id=\"pw_change_link\">\n          <label for=\"change_password_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Password", options) : helperMissing.call(depth0, "t", "Password", options)))
    + "</label>\n          <button class=\"change_password_button button\" data-dismiss=\"modal\" aria-hidden=\"true\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Change Password", options) : helperMissing.call(depth0, "t", "Change Password", options)))
    + "</button>\n        </div>\n\n        <div id=\"pw_change_controls\">\n          <div class=\"input-group\">\n            <label for=\"old_password\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Old password", options) : helperMissing.call(depth0, "t", "Old password", options)))
    + "</label>\n            <input type=\"password\" autocomplete=\"off\" name=\"old_password\" id=\"old_password\" value=\"\" />\n            (<a href=\"/accounts/password/reset/\" target=\"_blank\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Forgotten it?", options) : helperMissing.call(depth0, "t", "Forgotten it?", options)))
    + "</a>)\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"new_password\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "New password", options) : helperMissing.call(depth0, "t", "New password", options)))
    + "</label>\n            <input type=\"password\" autocomplete=\"off\" name=\"new_password\" id=\"new_password\" value=\"\" />\n          </div>\n\n          <div class=\"input-group\">\n            <label>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Password strength", options) : helperMissing.call(depth0, "t", "Password strength", options)))
    + "</label>\n            <div class=\"progress\" id=\"pw_strength\">\n              <div class=\"bar bar-danger fade\" style=\"width: 10%;\"></div>\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"confirm_password\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Confirm password", options) : helperMissing.call(depth0, "t", "Confirm password", options)))
    + "</label>\n            <input type=\"password\" autocomplete=\"off\" name=\"confirm_password\" id=\"confirm_password\" value=\"\" />\n          </div>\n\n        </div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <tr>\n                    <td>\n                      <a class=\"language\" data-code=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.selected), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      </a>\n                    </td>\n                    <td>\n                      <a class=\"language\" data-code=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.second)),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.second)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.second)),stack1 == null || stack1 === false ? stack1 : stack1.selected), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      </a>\n                    </td>\n                  </tr>\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <b>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.percent)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b>\n                        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.percent)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <b>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.second)),stack1 == null || stack1 === false ? stack1 : stack1.percent)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b>\n                        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.second)),stack1 == null || stack1 === false ? stack1 : stack1.percent)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        ";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n              checked=\"checked\"\n            ";
  }

function program14(depth0,data) {
  
  
  return "You'll receive notifications when a message arrives and __page_params.product_name__ isn't in focus or the message is offscreen.";
  }

function program16(depth0,data) {
  
  
  return "\n                   checked=\"checked\"\n                   ";
  }

function program18(depth0,data) {
  
  
  return "Change notification settings for individual streams on your <a href=\"/#subscriptions\">Streams page</a>.";
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <p class=\"bot-settings-note padded-container\">\n      Looking for our <a href=\"/integrations\" target=\"_blank\">Integrations</a>\n      or <a href=\"";
  if (helper = helpers.server_uri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.server_uri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/api\" target=\"_blank\">API</a> documentation?\n    </p>\n    ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\n        <p class=\"api-key-note\">For most bots using the API, you'll want to give each bot\n          its own name and API key using the above section.  But if you\n          want to write a bot that can access your own private\n          messages, you should use your personal API key.\n        </p>\n        ";
  }

function program24(depth0,data) {
  
  
  return "\n      <p>Please re-enter your password to confirm your identity.\n        (<a href=\"/accounts/password/reset/\" target=\"_blank\">Forgotten it?</a>)</p>\n      ";
  }

function program26(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <p class=\"alert-word-settings-note\">\n      "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Alert words allow you to be notified as if you were @-mentioned\n      when certain words or phrases are used in Zulip.", options) : helperMissing.call(depth0, "t", "Alert words allow you to be notified as if you were @-mentioned\n      when certain words or phrases are used in Zulip.", options)))
    + "\n    </p>\n    ";
  return buffer;
  }

function program28(depth0,data) {
  
  
  return "__page_params.product_name__ Labs";
  }

function program30(depth0,data) {
  
  
  return "\n               checked=\"checked\"\n            ";
  }

  buffer += "<h1><i class=\"icon-vector-wrench settings-icon\"></i>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Settings", options) : helperMissing.call(depth0, "t", "Settings", options)))
    + "</h1>\n\n<div id=\"settings-change-box\">\n\n  <div class=\"alert\" id=\"settings-status\"></div>\n\n  <div id=\"account-settings\" class=\"settings-section\">\n    <div class=\"settings-section-title\">\n      <i class=\"icon-vector-user settings-section-icon\"></i>\n      "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Your Account", options) : helperMissing.call(depth0, "t", "Your Account", options)))
    + "\n    </div>\n    <div class=\"account-settings-form\">\n      <form action=\"/json/settings/change\" method=\"post\"\n            class=\"form-horizontal your-account-settings\">\n        <div class=\"input-group\" id=\"name_change_container\">\n          <label for=\"full_name\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Full name", options) : helperMissing.call(depth0, "t", "Full name", options)))
    + "</label>\n          <input type=\"text\" name=\"full_name\" id=\"full_name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.fullname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        </div>\n\n        <!-- password start -->\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.password_auth_enabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div class=\"input-group\">\n          <input type=\"submit\" class=\"button green\" name=\"change_settings\" value=\"Save Changes\" />\n        </div>\n\n        <div class=\"input-group\">\n          <img id=\"user-settings-avatar\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n          <div id=\"user_avatar_file_input_error\" class=\"text-error\"></div>\n          <div id=\"user_avatar_file\"></div>\n          <input type=\"file\" name=\"user_avatar_file_input\" class=\"notvisible\" id=\"user_avatar_file_input\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Upload avatar", options) : helperMissing.call(depth0, "t", "Upload avatar", options)))
    + "\" />\n          <div id=\"upload_avatar_spinner\"></div>\n          <button class=\"button standalone\" id=\"user_avatar_upload_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Customize avatar", options) : helperMissing.call(depth0, "t", "Customize avatar", options)))
    + "</button>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n\n  <div>\n    <div id=\"display-settings\" class=\"settings-section\">\n      <div class=\"settings-section-title\">\n        <i class=\"icon-vector-time settings-section-icon\"></i>\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Display Settings", options) : helperMissing.call(depth0, "t", "Display Settings", options)))
    + "\n      </div>\n      <div class=\"alert\" id=\"display-settings-status\"></div>\n      <form class=\"display-settings-form\">\n\n        <div class=\"input-group\">\n          <label for=\"default_language\" class=\"inline-block\"> "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Default Language", options) : helperMissing.call(depth0, "t", "Default Language", options)))
    + ": <span id='default_language_name'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.default_language_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></label>\n          <a id=\"default_language\" href=\"#default_language\" title='Change default language'>[Change]</a>\n        </div>\n        <div id=\"default_language_modal\" class=\"modal hide\" tabindex=\"-1\" role=\"dialog\"\n              aria-labelledby=\"default_language_modal_label\" aria-hidden=\"true\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n            <h3 id=\"default_language_modal_label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Select Default Language", options) : helperMissing.call(depth0, "t", "Select Default Language", options)))
    + "</h3>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n            The following is a few of the languages we have started to\n            support or are hoping to support in the near future. We would\n            love help translating; if you're interested in helping, make an\n            account at <a href='https://www.transifex.com/zulip/zulip/'>\n            https://www.transifex.com/zulip/zulip/</a>, and sign up for a\n            language! You can also request any language we don't currently\n            have. It only takes a few hours to translate the most important\n            parts of the app.\n            </p>\n            <div>\n              <table>\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.language_list_dbl_col), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </table>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Close", options) : helperMissing.call(depth0, "t", "Close", options)))
    + "</button>\n          </div>\n        </div>\n\n        <div class=\"input-group thinner\">\n          <input type=\"checkbox\" class=\"inline-block\" name=\"left_side_userlist\" id=\"left_side_userlist\"\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.left_side_userlist), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"left_side_userlist\" class=\"inline-block\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Display user list on left side in narrow windows.", options) : helperMissing.call(depth0, "t", "Display user list on left side in narrow windows.", options)))
    + "</label>\n        </div>\n\n        <div class=\"input-group thinner\">\n          <input type=\"checkbox\" class=\"inline-block\" name=\"twenty_four_hour_time\" id=\"twenty_four_hour_time\"\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.twenty_four_hour_time), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n          <label for=\"twenty_four_hour_time\" class=\"inline-block\">\n            "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Display time in 24-hour format (17:00 instead of 5:00 PM)", options) : helperMissing.call(depth0, "t", "Display time in 24-hour format (17:00 instead of 5:00 PM)", options)))
    + "\n          </label>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div>\n    <div id=\"notification-settings\" class=\"settings-section\">\n      <div class=\"settings-section-title\">\n        <i class=\"icon-vector-warning-sign settings-section-icon\"></i>\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Notifications", options) : helperMissing.call(depth0, "t", "Notifications", options)))
    + "\n      </div>\n\n      <form class=\"notification-settings-form\">\n        <div class=\"notification-reminder w-70 padded-container center-block\">";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        <div class=\"alert\" id=\"notify-settings-status\"></div>\n\n        <h4>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream messages", options) : helperMissing.call(depth0, "t", "Stream messages", options)))
    + "</h4>\n\n        <div class=\"padded-container\">\n          <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Unless I say otherwise for a particular stream, I want:", options) : helperMissing.call(depth0, "t", "Unless I say otherwise for a particular stream, I want:", options)))
    + "</p>\n\n          <div class=\"input-group thinner\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_stream_desktop_notifications\"\n                   id=\"enable_stream_desktop_notifications\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.stream_desktop_notifications_enabled), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_stream_desktop_notifications\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Desktop notifications", options) : helperMissing.call(depth0, "t", "Desktop notifications", options)))
    + "\n            </label>\n            <div class=\"propagate_stream_notifications_change\"></div>\n          </div>\n\n          <div class=\"input-group thinner\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_stream_sounds\" id=\"enable_stream_sounds\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.stream_sounds_enabled), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_stream_sounds\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Audible notifications", options) : helperMissing.call(depth0, "t", "Audible notifications", options)))
    + "\n            </label>\n            <div class=\"propagate_stream_notifications_change\"></div>\n          </div>\n\n          <p class=\"notification-settings-note\">\n            ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </p>\n        </div>\n\n        <h4>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Private messages and @-mentions", options) : helperMissing.call(depth0, "t", "Private messages and @-mentions", options)))
    + "</h4>\n\n        <div class=\"padded-container\">\n          <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "I want:", options) : helperMissing.call(depth0, "t", "I want:", options)))
    + "</p>\n\n          <div class=\"input-group thinner\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_desktop_notifications\" id=\"enable_desktop_notifications\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.desktop_notifications_enabled), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_desktop_notifications\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Desktop notifications", options) : helperMissing.call(depth0, "t", "Desktop notifications", options)))
    + "\n            </label>\n          </div>\n\n          <div class=\"input-group thinner\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_sounds\" id=\"enable_sounds\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.sounds_enabled), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_sounds\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Audible notifications", options) : helperMissing.call(depth0, "t", "Audible notifications", options)))
    + "\n            </label>\n          </div>\n\n          <div class=\"input-group thinner\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_offline_email_notifications\" id=\"enable_offline_email_notifications\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.enable_offline_email_notifications), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_offline_email_notifications\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email notifications when offline", options) : helperMissing.call(depth0, "t", "Email notifications when offline", options)))
    + "\n            </label>\n          </div>\n\n          <div class=\"input-group thinner\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_offline_push_notifications\" id=\"enable_offline_push_notifications\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.enable_offline_push_notifications), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_offline_push_notifications\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Mobile push notifications when offline", options) : helperMissing.call(depth0, "t", "Mobile push notifications when offline", options)))
    + "\n            </label>\n          </div>\n        </div>\n\n        <div id=\"other_notifications\">\n\n        <h4>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Other notifications", options) : helperMissing.call(depth0, "t", "Other notifications", options)))
    + " "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "I want", options) : helperMissing.call(depth0, "t", "I want", options)))
    + ":</h4>\n\n        <div class=\"padded-container\">\n          <div class=\"input-group no-margin\" id=\"digest_container\">\n            <input type=\"checkbox\" class=\"inline-block\" name=\"enable_digest_emails\" id=\"enable_digest_emails\"\n                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.enable_digest_emails), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n            <label for=\"enable_digest_emails\" class=\"inline-block\">\n              "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Digest emails when I'm away", options) : helperMissing.call(depth0, "t", "Digest emails when I'm away", options)))
    + "\n            </label>\n          </div>\n        </div>\n        \n        </div>\n\n        <div class=\"input-group\">\n          <div class=\"controls notification-submission\">\n            <input type=\"submit\" id=\"change_notification_settings\"\n                   name=\"change_notification_settings\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Save Changes", options) : helperMissing.call(depth0, "t", "Save Changes", options)))
    + "\"\n                   class=\"button green\" />\n          </div>\n        </div>\n      </form>\n\n    </div>\n\n  </div>\n</div>\n\n<div id=\"bot-settings\" class=\"settings-section\">\n\n  <div class=\"settings-section-title\">\n    <i class=\"icon-vector-github settings-section-icon\"></i>\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Your Bots", options) : helperMissing.call(depth0, "t", "Your Bots", options)))
    + "\n  </div>\n\n  <div class=\"bot-settings-form\">\n    ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <ol id=\"bots_list\">\n    </ol>\n    <div id=\"bot_table_error\" class=\"alert alert-error hide\"></div>\n\n    <div class=\"add-new-bot-box grey-bg\">\n      <form id=\"create_bot_form\" class=\"form-horizontal no-padding\">\n        <h4 class=\"new-bot-section-title light no-margin\">Add a New Bot</h4>\n        <div class=\"new-bot-form\">\n          <div class=\"input-group\">\n            <label for=\"create_bot_name\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Full name", options) : helperMissing.call(depth0, "t", "Full name", options)))
    + "</label>\n            <input type=\"text\" name=\"bot_name\" id=\"create_bot_name\" class=\"required\"\n                   maxlength=100 placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Full Bot Name", options) : helperMissing.call(depth0, "t", "Full Bot Name", options)))
    + "\" value=\"\" />\n            <div><label for=\"create_bot_name\" generated=\"true\" class=\"text-error\"></label></div>\n          </div>\n          <div class=\"input-group\">\n            <label for=\"bot_short_name\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Username", options) : helperMissing.call(depth0, "t", "Username", options)))
    + "</label>\n            <input type=\"text\" name=\"bot_short_name\" id=\"create_bot_short_name\" class=\"required bot_local_part\"\n                   placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "bot_user_name", options) : helperMissing.call(depth0, "t", "bot_user_name", options)))
    + "\" value=\"\" />\n                   -"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "bot", options) : helperMissing.call(depth0, "t", "bot", options)))
    + "@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.domain)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            <div>\n              <label for=\"create_bot_short_name\" generated=\"true\" class=\"text-error\"></label>\n            </div>\n          </div>\n          <div class=\"input-group new-bot-ui\">\n            <label for=\"create_bot_default_sending_stream\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Send to stream", options) : helperMissing.call(depth0, "t", "Send to stream", options)))
    + "</label>\n            <select name=\"bot_default_sending_stream\" id=\"create_bot_default_sending_stream\"></select>\n          </div>\n          <div class=\"input-group new-bot-ui\">\n            <label for=\"create_bot_default_events_register_stream\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Listen on", options) : helperMissing.call(depth0, "t", "Listen on", options)))
    + "</label>\n            <select name=\"bot_default_events_register_stream\" id=\"create_bot_default_events_register_stream\"></select>\n          </div>\n          <div class=\"input-group\">\n            <div id=\"bot_avatar_file\"></div>\n            <input type=\"file\" name=\"bot_avatar_file_input\" class=\"notvisible\" id=\"bot_avatar_file_input\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Upload avatar", options) : helperMissing.call(depth0, "t", "Upload avatar", options)))
    + "\" />\n            <button class=\"btn btn-default display-none\" id=\"bot_avatar_clear_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Clear avatar", options) : helperMissing.call(depth0, "t", "Clear avatar", options)))
    + "</button>\n            <button class=\"button white\" id=\"bot_avatar_upload_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Customize avatar", options) : helperMissing.call(depth0, "t", "Customize avatar", options)))
    + "</button> ("
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Optional", options) : helperMissing.call(depth0, "t", "Optional", options)))
    + ")\n          </div>\n          <p>\n            <div id=\"bot_avatar_file_input_error\" class=\"text-error\"></div>\n          </p>\n          <input type=\"submit\" class=\"button\" id=\"create_bot_button\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Create Bot", options) : helperMissing.call(depth0, "t", "Create Bot", options)))
    + "\" />\n        </div>\n      </form>\n    </div>\n\n    <hr class=\"settings_separator\" />\n\n    <div class=\"form-horizontal\" id=\"api_key_button_box\">\n      <div class=\"input-group side-padded-container\">\n        ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <button class=\"button white\" id=\"api_key_button\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Show/change your API key", options) : helperMissing.call(depth0, "t", "Show/change your API key", options)))
    + "</button>\n      </div>\n    </div>\n    <div id=\"get_api_key_box\">\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <form action=\"/json/fetch_api_key\" method=\"post\" class=\"form-horizontal\">\n        <div class=\"control-group\">\n          <label for=\"password\" class=\"control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Current password", options) : helperMissing.call(depth0, "t", "Current password", options)))
    + "</label>\n          <input type=\"password\" autocomplete=\"off\"\n                 name=\"password\" id=\"get_api_key_password\" value=\"\" />\n        </div>\n        <div class=\"control-group\">\n          <input type=\"submit\" name=\"view_api_key\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Get API key", options) : helperMissing.call(depth0, "t", "Get API key", options)))
    + "\"\n                 class=\"btn btn-primary\" />\n        </div>\n      </form>\n    </div>\n    <div id=\"show_api_key_box\">\n      <p>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Your API key:", options) : helperMissing.call(depth0, "t", "Your API key:", options)))
    + "</p>\n      <p><b><span id=\"api_key_value\"></span></b></p>\n      <button type=\"submit\" class=\"btn btn-primary regenerate_api_key\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Generate new API Key", options) : helperMissing.call(depth0, "t", "Generate new API Key", options)))
    + "\n      </button>\n      <div id=\"user_api_key_error text-error\">\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"alert-word-settings\" class=\"settings-section\">\n  <div class=\"settings-section-title\">\n    <i class=\"icon-vector-book settings-section-icon\"></i>\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Custom Alert Words", options) : helperMissing.call(depth0, "t", "Custom Alert Words", options)))
    + "\n  </div>\n  <form class=\"form-horizontal\" id=\"alert_word_info_box\">\n    ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </form>\n  <ul id=\"alert_words_list\"></ul>\n</div>\n\n<div class=\"ui-settings\">\n  <div id=\"ui-settings\" class=\"settings-section\">\n    <div class=\"settings-section-title\"><i class=\"icon-vector-beaker settings-section-icon\"></i>";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    <div class=\"alert\" id=\"ui-settings-status\"></div>\n    <form class=\"ui-settings-form\">\n      <p class=\"input-group\">\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Warning: the below features are experimental features and may not work as well as you would like.", options) : helperMissing.call(depth0, "t", "Warning: the below features are experimental features and may not work as well as you would like.", options)))
    + "\n      </p>\n      <div class=\"input-group thinner\">\n        <input type=\"checkbox\" class=\"inline-block\" name=\"autoscroll_forever\" id=\"autoscroll_forever\"\n               ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.autoscroll_forever), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n        <label for=\"autoscroll_forever\" class=\"inline-block\">\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Always auto-scroll to new messages", options) : helperMissing.call(depth0, "t", "Always auto-scroll to new messages", options)))
    + "\n        </label>\n      </div>\n      <div class=\"input-group thinner\">\n        <input type=\"checkbox\" class=\"inline-block\" name=\"default_desktop_notifications\" id=\"default_desktop_notifications\"\n               ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.page_params)),stack1 == null || stack1 === false ? stack1 : stack1.default_desktop_notifications), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n        <label for=\"default_desktop_notifications\" class=\"inline-block\">\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Enable desktop notifications for new streams", options) : helperMissing.call(depth0, "t", "Enable desktop notifications for new streams", options)))
    + "\n        </label>\n\n      </div>\n      <div class=\"input-group\">\n        <div class=\"ui-submission\">\n          <input type=\"submit\" name=\"change_settings\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Save Changes", options) : helperMissing.call(depth0, "t", "Save Changes", options)))
    + "\" class=\"button green\" />\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  return buffer;
  });
templates['sidebar_private_message_list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_zero), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.zoom_out_hide), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " expanded_private_message' data-name='";
  if (helper = helpers.reply_to) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reply_to); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n      <span class='subject_box'>\n        <a href='";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class=\"conversation-partners\">\n          ";
  if (helper = helpers.recipients) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.recipients); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </a>\n        <div class=\"private_message_count ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_zero), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <div class=\"value\">";
  if (helper = helpers.unread) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </div>\n      </span>\n      <span class=\"arrow topic-sidebar-arrow\">\n        <i class=\"icon-vector-chevron-down\"></i>\n      </span>\n    </li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "zero-subject-unreads";
  }

function program4(depth0,data) {
  
  
  return "zoom-out-hide";
  }

function program6(depth0,data) {
  
  
  return "zero_count";
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <li class=\"show-more-private-messages\" data-name='more-private-messages'>\n      <a href=\"#\">("
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "more conversations", options) : helperMissing.call(depth0, "t", "more conversations", options)))
    + ")</a>\n    </li>\n    ";
  return buffer;
  }

  buffer += "<ul class='expanded_private_messages' data-name='private'>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.messages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.want_show_more_messages_links), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['sidebar_subject_list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_zero), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_muted), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.zoom_out_hide), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " expanded_subject' data-name='";
  if (helper = helpers.topic_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n      <span class='subject_box'>\n        <a href='";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class=\"subject-name\">\n          ";
  if (helper = helpers.topic_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </a>\n        <div class=\"subject_count ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_zero), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <div class=\"value\">";
  if (helper = helpers.unread) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </div>\n      </span>\n      <span class=\"arrow topic-sidebar-arrow\">\n        <i class=\"icon-vector-chevron-down\"></i>\n      </span>\n    </li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "zero-subject-unreads";
  }

function program4(depth0,data) {
  
  
  return "muted_topic";
  }

function program6(depth0,data) {
  
  
  return " zoom-out-hide";
  }

function program8(depth0,data) {
  
  
  return "zero_count";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"show-more-topics\" data-stream=\"";
  if (helper = helpers.stream) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <a href=\"#\">("
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "more topics", options) : helperMissing.call(depth0, "t", "more topics", options)))
    + ")</a>\n    </li>\n    ";
  return buffer;
  }

  buffer += "<ul class='expanded_subjects' data-stream='";
  if (helper = helpers.stream) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subjects), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.want_show_more_topics_links), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['single_message'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " private-message";
  }

function program3(depth0,data) {
  
  
  return " include-sender";
  }

function program5(depth0,data) {
  
  
  return " mention";
  }

function program7(depth0,data) {
  
  
  return " last_message";
  }

function program9(depth0,data) {
  
  
  return " unread";
  }

function program11(depth0,data) {
  
  
  return "local";
  }

function program13(depth0,data) {
  
  
  return " prev_is_same_sender";
  }

function program15(depth0,data) {
  
  
  return "next_is_same_sender";
  }

function program17(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.background_color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.background_color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program19(depth0,data) {
  
  
  return "#444444";
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <span class=\"message_sender";
  options={hash:{},inverse:self.program(22, program22, data),fn:self.noop,data:data}
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.status_message) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(22, program22, data),fn:self.noop,data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            \n            <div class=\"u-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.sender_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " inline_profile_picture";
  options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data}
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.status_message) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 style=\"background-image: url('";
  if (helper = helpers.small_avatar_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.small_avatar_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\"/>\n          <span class=\"";
  options={hash:{},inverse:self.program(24, program24, data),fn:self.noop,data:data}
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.status_message) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(24, program24, data),fn:self.noop,data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data}
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.status_message) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.status_message), {hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.if_and || (depth0 && depth0.if_and),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.last_edit_timestr), (depth0 && depth0.include_sender), options) : helperMissing.call(depth0, "if_and", (depth0 && depth0.last_edit_timestr), (depth0 && depth0.include_sender), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </span>\n          </span>\n          ";
  return buffer;
  }
function program22(depth0,data) {
  
  
  return " sender_info_hover";
  }

function program24(depth0,data) {
  
  
  return "sender_name";
  }

function program26(depth0,data) {
  
  
  return "sender-status";
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.sender_full_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <span class=\"sender_name";
  options={hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data}
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.status_message) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " sender_info_hover\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.sender_full_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                  ";
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program31(depth0,data) {
  
  
  return "-in-status";
  }

function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.status_message), {hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"message_edit_notice\" title=\"Edited (";
  if (helper = helpers.last_edit_timestr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_edit_timestr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "EDITED", options) : helperMissing.call(depth0, "t", "EDITED", options)))
    + "</div>\n              ";
  return buffer;
  }

function program36(depth0,data) {
  
  
  return " notvisible";
  }

function program38(depth0,data) {
  
  
  return " status-time";
  }

function program40(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.status_message), {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program41(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"message_edit_notice\" title=\"Edited (";
  if (helper = helpers.last_edit_timestr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_edit_timestr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "EDITED", options) : helperMissing.call(depth0, "t", "EDITED", options)))
    + "</div>\n            ";
  return buffer;
  }

function program43(depth0,data) {
  
  
  return " sender-status-controls";
  }

function program45(depth0,data) {
  
  
  return "icon-vector-star";
  }

function program47(depth0,data) {
  
  
  return "icon-vector-star-empty empty-star";
  }

function program49(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.starred), {hash:{},inverse:self.program(52, program52, data),fn:self.program(50, program50, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " this message";
  return buffer;
  }
function program50(depth0,data) {
  
  
  return "Unstar";
  }

function program52(depth0,data) {
  
  
  return "Star";
  }

function program54(depth0,data) {
  
  
  return "notvisible";
  }

function program56(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.use_match_properties), {hash:{},inverse:self.program(59, program59, data),fn:self.program(57, program57, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program57(depth0,data) {
  
  var stack1;
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.match_content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program59(depth0,data) {
  
  var stack1;
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program61(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.include_sender), {hash:{},inverse:self.noop,fn:self.program(62, program62, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program62(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div class=\"message_edit_notice\" title=\"Edited (";
  if (helper = helpers.last_edit_timestr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_edit_timestr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "EDITED", options) : helperMissing.call(depth0, "t", "EDITED", options)))
    + "</div>\n          ";
  return buffer;
  }

  buffer += "<div zid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"";
  if (helper = helpers.table_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.table_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n  class=\"message_row";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.is_stream)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(1, program1, data),fn:self.noop,data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.include_sender) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.include_sender); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.include_sender) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.contains_mention) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.contains_mention); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.contains_mention) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data}
  if (helper = helpers.include_footer) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.include_footer); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.include_footer) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.unread)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.local_id), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " selectable_row\">\n  <div class=\"unread_marker\"><div class=\"unread-marker-fill\"></div></div>\n  <div class=\"messagebox";
  options={hash:{},inverse:self.program(13, program13, data),fn:self.noop,data:data}
  if (helper = helpers.include_sender) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.include_sender); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.include_sender) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(13, program13, data),fn:self.noop,data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.is_stream)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(1, program1, data),fn:self.noop,data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next_is_same_sender), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       style=\"box-shadow: inset 2px 0px 0px 0px ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.is_stream), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", -1px 0px 0px 0px ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.is_stream), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\">\n    <div class=\"messagebox-border\">\n      <div class=\"messagebox-content\">\n        <div class=\"message_top_line\">\n          ";
  options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data}
  if (helper = helpers.include_sender) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.include_sender); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.include_sender) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <span class=\"message_time";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.local_id), {hash:{},inverse:self.noop,fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.status_message), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.timestr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timestr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          ";
  stack1 = (helper = helpers.if_and || (depth0 && depth0.if_and),options={hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.last_edit_timestr), (depth0 && depth0.include_sender), options) : helperMissing.call(depth0, "if_and", (depth0 && depth0.last_edit_timestr), (depth0 && depth0.include_sender), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <div class=\"message_controls";
  options={hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data}
  if (helper = helpers.status_message) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.status_message); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.status_message) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <div class=\"star\">\n              <span class=\"message_star ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.starred), {hash:{},inverse:self.program(47, program47, data),fn:self.program(45, program45, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                    title=\"";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(49, program49, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\n            </div>\n            <div class=\"info actions_hover\">\n              <i class=\"icon-vector-chevron-down\"></i>\n            </div>\n            <div class=\"message_failed ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.failed_request), {hash:{},inverse:self.noop,fn:self.program(54, program54, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              <span class=\"failed_text\">Not delivered </span><i class=\"icon-vector-refresh refresh-failed-message\"></i><i class=\"icon-vector-pencil edit-failed-message\"></i><i class=\"icon-vector-remove-sign remove-failed-message\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"message_content\">";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.status_message), {hash:{},inverse:self.noop,fn:self.program(56, program56, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.last_edit_timestr), {hash:{},inverse:self.noop,fn:self.program(61, program61, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"message_edit\">\n          <div class=\"message_edit_form\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.msg)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n        </div>\n        <div class=\"message_expander message_length_controller\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "See the rest of this message", options) : helperMissing.call(depth0, "t", "See the rest of this message", options)))
    + "\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "[More...]", options) : helperMissing.call(depth0, "t", "[More...]", options)))
    + "</div>\n        <div class=\"message_condenser message_length_controller\" title=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Make this message take up less space on the screen", options) : helperMissing.call(depth0, "t", "Make this message take up less space on the screen", options)))
    + "\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "[Condense this message]", options) : helperMissing.call(depth0, "t", "[Condense this message]", options)))
    + "</div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
templates['stream_member_list_entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <td class=\"unsubscribe\">\n        <div class=\"subscriber_list_remove\">\n            <form class=\"form-inline remove-subscriber-form\">\n                    <input type=\"submit\" name=\"unsubscribe\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Unsubscribe", options) : helperMissing.call(depth0, "t", "Unsubscribe", options)))
    + "\"\n                           class=\"btn btn-danger remove-subscriber-button\" />\n            </form>\n        </div>\n    </td>\n    ";
  return buffer;
  }

  buffer += "<tr>\n    <td class=\"subscriber-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td class=\"subscriber-email\">";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displaying_for_admin), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tr>\n";
  return buffer;
  });
templates['stream_privacy'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n  <i class=\"icon-vector-lock\"></i>\n";
  }

  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['stream_sidebar_actions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Narrow to stream <b>__stream.name__</b>";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "Unpin stream <b>__stream.name__</b> from top";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "Pin stream <b>__stream.name__</b> to top";
  }

function program9(depth0,data) {
  
  
  return "Compose a message to stream <b>__stream.name__</b>";
  }

function program11(depth0,data) {
  
  
  return "Mark all messages in <b>__stream.name__</b> as read";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <i class=\"icon-vector-eye-close\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "Mute the stream <b>__stream.name__</b>";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <i class=\"icon-vector-eye-open\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program17(depth0,data) {
  
  
  return "Unmute the stream <b>__stream.name__</b>";
  }

  buffer += "\n<ul class=\"nav nav-list streams_popover\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.stream_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <li>\n    <a class=\"open_stream_settings\">\n      <i class=\"icon-vector-cog\"></i>\n      "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream settings", options) : helperMissing.call(depth0, "t", "Stream settings", options)))
    + "\n    </a>\n  </li>\n  <li>\n    <a class=\"narrow_to_stream\">\n      <i class=\"icon-vector-bullhorn\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"pin_to_top\">\n      <i class=\"icon-vector-pushpin stream-pin-icon\"></i>\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.pin_to_top), {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"compose_to_stream\">\n      <i class=\"icon-vector-edit\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"mark_stream_as_read\">\n      <i class=\"icon-vector-book\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"toggle_home\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.in_home_view), {hash:{},inverse:self.program(16, program16, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"popover_sub_unsub_button\" data-name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class='icon-vector-envelope'></i>\n    </a>\n  </li>\n  <li>\n    <span class=\"colorpicker-container\"><input stream_name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"colorpicker\" type=\"text\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stream)),stack1 == null || stack1 === false ? stack1 : stack1.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></span>\n    <a class=\"custom_color\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Choose custom color", options) : helperMissing.call(depth0, "t", "Choose custom color", options)))
    + "</a>\n  </li>\n\n</ul>\n";
  return buffer;
  });
templates['stream_sidebar_row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " out_of_home_view";
  }

function program3(depth0,data) {
  
  
  return " private-stream-swatch";
  }

  buffer += "\n\n<li data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"narrow-filter";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.not_in_home_view), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    id=\"stream_sidebar_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    \n\n    <div class=\"subscription_block selectable_sidebar_block\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n      <div id=\"stream_sidebar_swatch_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"streamlist_swatch";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;</div>\n\n      <a href=\"";
  if (helper = helpers.uri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"subscription_name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n\n      <div class=\"count\"><div class=\"value\"></div></div>\n\n      <span id=\"stream_sidebar_privacy_swatch_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"stream-privacy\" style=\"color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        "
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "stream_privacy", options) : helperMissing.call(depth0, "partial", "stream_privacy", options)))
    + "\n      </span>\n\n    </div>\n    <span class=\"arrow stream-sidebar-arrow\"><i class=\"icon-vector-chevron-down\"></i></span>\n\n</li>\n";
  return buffer;
  });
templates['subscription'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"subscription_row\" id=\"subscription_";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-subscription-id=\"";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"subscription_table_elem subscription_header collapsed\" data-toggle=\"collapse\" data-target=\"#subscription_settings_";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <div class=\"subscription-info-container\">\n        <span class=\"subscription-setting-icon\">\n          "
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "subscription_setting_icon", options) : helperMissing.call(depth0, "partial", "subscription_setting_icon", options)))
    + "\n        </span>\n        <div class=\"subscription-info\">\n          <span class=\"subscription_name subscription-name-row\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          <span class=\"subscription_description subscription-description-row light\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n\n      <span class=\"sub_arrow\"><i class=\"icon-vector-chevron-down\"></i></span>\n      <button class=\"btn sub_unsub_button btn-default";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n              type=\"button\" name=\"subscription\">\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options={hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </button>\n      <a class=\"preview-stream\" href=\"#narrow/stream/";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options={hash:{},inverse:self.program(10, program10, data),fn:self.noop,data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(10, program10, data),fn:self.noop,data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n\n    <div id=\"subscription_settings_";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"collapse subscription_settings\">\n      <div class=\"regular_subscription_settings collapse ";
  options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <div class=\"subscription-type\">\n          "
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "subscription_type", options) : helperMissing.call(depth0, "partial", "subscription_type", options)))
    + "\n        </div>\n        <div class=\"subscription-config\">\n        <ul>\n          <li>\n            <div id=\"sub_setting_not_in_home_view\" class=\"sub_setting_checkbox sub-mute-setting\">\n              <input id=\"mutestream-";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"sub_setting_control\" type=\"checkbox\" tabindex=\"-1\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.in_home_view), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n              <label class=\"subscription-control-label\">Mute stream</label>\n              <p class=\"mute-note ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.in_home_view), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Muted streams don't show up in your home view or generate notifications unless you are mentioned.", options) : helperMissing.call(depth0, "t", "Muted streams don't show up in your home view or generate notifications unless you are mentioned.", options)))
    + "</p>\n            </div>\n          </li>\n          <li>\n\n            <div id=\"sub_desktop_notifications_setting\"\n                 class=\"sub_setting_checkbox sub_notification_setting ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.in_home_view), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              <input id=\"desktop-notifystream-";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"sub_setting_control\" type=\"checkbox\" tabindex=\"-1\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.desktop_notifications), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.in_home_view), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n              <label class=\"subscription-control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Receive desktop <br />notifications", options) : helperMissing.call(depth0, "t", "Receive desktop <br />notifications", options)))
    + "</label>\n            </div>\n\n            <div id=\"sub_audible_notifications_setting\"\n                 class=\"sub_setting_checkbox sub_notification_setting ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.in_home_view), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              <input id=\"audible-notifystream-";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"sub_setting_control\" type=\"checkbox\" tabindex=\"-1\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.audible_notifications), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.in_home_view), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n              <label class=\"subscription-control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Receive audible<br />notifications", options) : helperMissing.call(depth0, "t", "Receive audible<br />notifications", options)))
    + "</label>\n            </div>\n\n          </li>\n          <li>\n            <div id=\"sub_pin_setting\" class=\"sub_setting_checkbox\">\n              <input id=\"pinstream-";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"sub_setting_control\" type=\"checkbox\" tabindex=\"-1\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pin_to_top), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n              <label class=\"subscription-control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Pin stream to top<br /> of left sidebar", options) : helperMissing.call(depth0, "t", "Pin stream to top<br /> of left sidebar", options)))
    + "</label>\n            </div>\n          </li>\n          <li>\n            <span class=\"sub_setting_control\">\n              <input stream_name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"colorpicker\" id=\"streamcolor\" type=\"text\" value=\"";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" />\n            </span>\n            <label for=\"streamcolor\" class=\"subscription-control-label\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream color", options) : helperMissing.call(depth0, "t", "Stream color", options)))
    + "</label>\n          </li>\n        </ul>\n        </div>\n      </div>\n      ";
  stack1 = (helper = helpers.if_and || (depth0 && depth0.if_and),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.subscribed), (depth0 && depth0.email_address), options) : helperMissing.call(depth0, "if_and", (depth0 && depth0.subscribed), (depth0 && depth0.email_address), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_admin), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data}
  if (helper = helpers.render_subscribers) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.render_subscribers); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.render_subscribers) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " btn-success subscribed-button";
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Subscribed", options) : helperMissing.call(depth0, "t", "Subscribed", options)))
    + "\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Subscribe", options) : helperMissing.call(depth0, "t", "Subscribe", options)))
    + "\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Narrow", options) : helperMissing.call(depth0, "t", "Narrow", options)))
    + "\n        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n          "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Preview", options) : helperMissing.call(depth0, "t", "Preview", options)))
    + "\n        ";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "in";
  }

function program14(depth0,data) {
  
  
  return "checked";
  }

function program16(depth0,data) {
  
  
  return "hide-mute-note";
  }

function program18(depth0,data) {
  
  
  return "muted-sub";
  }

function program20(depth0,data) {
  
  
  return "disabled=\"disabled\"";
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"stream-email-box\">\n          <span class=\"sub_settings_title\">Email address <i class=\"icon-vector-question-sign stream-email-hint\" id=\"email-address-hint-";
  if (helper = helpers.stream_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i></span>\n      <div class=\"stream-email\">\n          <span class=\"email-address\">";
  if (helper = helpers.email_address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email_address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n      </div>\n      ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"admin-settings\">\n          <span class=\"sub_settings_title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Administrator settings", options) : helperMissing.call(depth0, "t", "Administrator settings", options)))
    + "</span>\n          <div class=\"rename-stream\">\n            <form class=\"form-inline\">\n              <input type=\"text\" name=\"new-name\" value=\"\" class=\"input-block new-stream-name\" tabindex=\"-1\" />\n              <input type=\"submit\" name=\"rename\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Rename stream", options) : helperMissing.call(depth0, "t", "Rename stream", options)))
    + "\" class=\"btn btn-danger stream-rename-button\" tabindex=\"-1\" />\n            </form>\n          </div>\n          <div class=\"change-stream-description\">\n            <form class=\"form-inline\">\n              <input type=\"hidden\" name=\"stream_name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n              <input type=\"text\" name=\"description\" value=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"input-block description\" tabindex=\"-1\" />\n              <input type=\"submit\" name=\"change-stream-description\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Change stream description", options) : helperMissing.call(depth0, "t", "Change stream description", options)))
    + "\" class=\"btn btn-danger change-stream-description-button\" tabindex=\"-1\" />\n            </form>\n          </div>\n          <div class=\"change-stream-privacy\">\n            "
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "change_stream_privacy", options) : helperMissing.call(depth0, "partial", "change_stream_privacy", options)))
    + "\n          </div>\n        </div>\n      ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n      <div class=\"subscriber_list_settings\">\n        <span class=\"sub_settings_title\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream membership", options) : helperMissing.call(depth0, "t", "Stream membership", options)))
    + "</span>\n        <div class=\"subscriber_list_add\">\n          <form class=\"form-inline\">\n            <input type=\"text\" name=\"principal\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email address", options) : helperMissing.call(depth0, "t", "Email address", options)))
    + "\" value=\"\" class=\"input-block\" autocomplete=\"off\" tabindex=\"-1\" />\n            <input type=\"submit\" name=\"add_subscriber\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Add", options) : helperMissing.call(depth0, "t", "Add", options)))
    + "\" class=\"btn btn-primary add-subscriber-button\" tabindex=\"-1 \"/>\n          </form>\n        </div>\n      </div>\n      <div class=\"subscriber-list-box\">\n        <div class=\"subscriber_list_container\">\n          <div class=\"subscriber_list_loading_indicator\"></div>\n          <div class=\"alert alert-error hide\"></div>\n          <div class=\"alert alert-warning hide\"></div>\n          <table class=\"subscriber-list\">\n          </table>\n        </div>\n      </div>\n      ";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers['with'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['subscription_setting_icon'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n   <span class=\"subscription_lock\"><i class=\"icon-vector-lock\" style=\"color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i></span>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n <span class=\"color_swatch fade ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.subscribed) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.subscribed); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.subscribed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "in";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['subscription_table_body'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n  <div id=\"create_stream_row\">\n      <div class=\"subscription_table_elem\">\n        <form id=\"add_new_subscription\" class=\"form-inline\" action=\"\">\n          <input type=\"text\" name=\"stream_name\" id=\"create_stream_name\"\n                 placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Stream name", options) : helperMissing.call(depth0, "t", "Stream name", options)))
    + "\" value=\"\" />\n          <input type=\"submit\" class=\"btn btn-primary\"\n                 id=\"create_stream_button\" value=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Create new stream", options) : helperMissing.call(depth0, "t", "Create new stream", options)))
    + "\" />\n        </form>\n      </div>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n"
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "subscription", options) : helperMissing.call(depth0, "partial", "subscription", options)))
    + "\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_create_streams), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subscriptions), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['subscription_type'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "This is an <span class=\"icon-vector-lock\"></span> <b>invite-only stream</b>. Only people who have been invited can access its content, but&nbsp;any&nbsp;member&nbsp;of&nbsp;the&nbsp;stream can&nbsp;invite&nbsp;others.", options) : helperMissing.call(depth0, "t", "This is an <span class=\"icon-vector-lock\"></span> <b>invite-only stream</b>. Only people who have been invited can access its content, but&nbsp;any&nbsp;member&nbsp;of&nbsp;the&nbsp;stream can&nbsp;invite&nbsp;others.", options)))
    + "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "This is a <span class=\"icon-vector-globe\"></span> <b>public stream</b>. Anybody in your organization can join.", options) : helperMissing.call(depth0, "t", "This is a <span class=\"icon-vector-globe\"></span> <b>public stream</b>. Anybody in your organization can join.", options)));
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.invite_only), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['tab_bar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <li class=\"";
  if (helper = helpers.active) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.active); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.cls) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cls); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hash), {hash:{},inverse:self.program(11, program11, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-name=\"";
  if (helper = helpers.data) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n      <i class=\"icon-vector-narrow icon-vector-small\"></i>\n    ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.home), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a href=\"";
  if (helper = helpers.hash) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hash); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-vector-home\"></i></a>\n      ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a href=\"";
  if (helper = helpers.hash) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hash); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.home), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.home), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program12(depth0,data) {
  
  
  return "\n        <i class=\"icon-vector-home\"></i>\n      ";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  return buffer;
  }

  buffer += "<ul id=\"tab_list\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tabs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['topic_edit_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<form id=\"topic_edit_form\" class=\"form-horizontal\">\n\n          <input type=\"text\" value=\"\" class=\"message_edit_topic header-v\" id=\"message_edit_topic\" />\n            <button type=\"button\" class=\"topic_edit_save primary\"><i class=\"icon-vector-ok\"></i></button>\n            <button type=\"button\" class=\"topic_edit_cancel primary\"><i class=\"icon-vector-remove\"></i></button>\n\n    <div class=\"alert alert-error edit_error hide\"></div>\n</form>\n";
  return buffer;
  });
templates['topic_sidebar_actions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Narrow to topic <b>__topic_name__</b>";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li>\n    <a href=\"#\" class=\"sidebar-popover-mute-topic\" data-stream-name=\"";
  if (helper = helpers.stream_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-topic-name=\"";
  if (helper = helpers.topic_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <i class=\"icon-vector-eye-close\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "Mute the topic <b>__topic_name__</b>";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li>\n    <a href=\"#\" class=\"sidebar-popover-unmute-topic\" data-stream-name=\"";
  if (helper = helpers.stream_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-topic-name=\"";
  if (helper = helpers.topic_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <i class=\"icon-vector-eye-open\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "Unmute the topic <b>__topic_name__</b>";
  }

function program9(depth0,data) {
  
  
  return "Mark all messages in <b>__topic_name__</b> as read";
  }

  buffer += "<ul class=\"nav nav-list topics_popover\">\n  <li>\n    <a class=\"narrow_to_topic\" data-stream-name=\"";
  if (helper = helpers.stream_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-topic-name=\"";
  if (helper = helpers.topic_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <i class=\"icon-vector-bullhorn\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_mute_topic), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_unmute_topic), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <li>\n    <a class=\"sidebar-popover-mark-topic-read\" data-stream-name=\"";
  if (helper = helpers.stream_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stream_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-topic-name=\"";
  if (helper = helpers.topic_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.topic_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <i class=\"icon-vector-book\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n\n\n</ul>\n";
  return buffer;
  });
templates['tutorial_home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    <p>You can <b>narrow</b> to a stream or topic by <b>clicking on it</b>, or\n       see messages from all streams at once from your Home view.</p>\n    ";
  }

  buffer += "\n\n<div class=\"tutorial-popover popover-";
  if (helper = helpers.placement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"tutorial-home\">\n\n    ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"tutorial-done-button\">\n      <button class=\"btn btn-primary\" type=\"submit\" id=\"tutorial-home-next\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Next", options) : helperMissing.call(depth0, "t", "Next", options)))
    + "</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates['tutorial_message'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "<p>Messages in __page_params.product_name__ go to a <b>stream</b> and have a <b>topic</b>.</p>";
  }

  buffer += "\n\n<div class=\"tutorial-popover popover-";
  if (helper = helpers.placement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"tutorial-message\">\n    ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"tutorial-done-button\">\n    <center>\n      <button class=\"btn btn-skip\" type=\"submit\" id=\"tutorial-message-skip\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Exit Tutorial", options) : helperMissing.call(depth0, "t", "Exit Tutorial", options)))
    + "</button>\n      <button class=\"btn btn-primary\" type=\"submit\" id=\"tutorial-message-next\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Next", options) : helperMissing.call(depth0, "t", "Next", options)))
    + "</button>\n    </center>\n    </div>\n</div>\n";
  return buffer;
  });
templates['tutorial_reply'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    <p><b>Reply</b> to a message by <b>clicking on it</b>. The stream\n        and topic will automatically be filled in.</p>\n    ";
  }

  buffer += "\n\n<div class=\"tutorial-popover popover-";
  if (helper = helpers.placement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"tutorial-reply\">\n\n    ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"tutorial-done-button\">\n      <button class=\"btn btn-primary\" type=\"submit\" id=\"tutorial-reply-next\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Next", options) : helperMissing.call(depth0, "t", "Next", options)))
    + "</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates['tutorial_stream'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        <b>Streams</b> are like chat rooms or mailing lists. You can easily\n        <b>join</b>, <b>leave</b>, and <b>make</b> them.\n        ";
  }

  buffer += "\n\n<div class=\"tutorial-popover popover-";
  if (helper = helpers.placement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"tutorial-stream\">\n    <p>\n        ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n\n    <div class=\"tutorial-done-button\">\n      <button class=\"btn btn-primary\" type=\"submit\" id=\"tutorial-stream-next\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Next", options) : helperMissing.call(depth0, "t", "Next", options)))
    + "</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates['tutorial_subject'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        The <b>topic</b> of a conversation is one or two words that describe\n        what it is about, for example: <b>Bug #345</b>, <b>lunch</b>, or\n        <b>logo</b>. Don't overthink it.\n        ";
  }

  buffer += "\n\n<div class=\"tutorial-popover popover-";
  if (helper = helpers.placement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"tutorial-subject\">\n\n    <p>\n        ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n\n    <div class=\"tutorial-done-button\">\n      <button class=\"btn btn-primary\" type=\"submit\" id=\"tutorial-subject-next\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Next", options) : helperMissing.call(depth0, "t", "Next", options)))
    + "</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates['tutorial_title'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n\n<h4 class=\"popover-";
  if (helper = helpers.placement) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.placement); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n";
  return buffer;
  });
templates['user_presence_row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "user-with-count ";
  }

function program3(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return " my_fullname";
  }

function program7(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.num_unread) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num_unread); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

  buffer += "<li data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"user_sidebar_entry ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.num_unread), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "narrow-filter user_";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <span class=\"selectable_sidebar_block";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <span class=\"user-status-indicator\"></span>\n    <span class=\"user-device-indicator\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      <a href=\"#\" data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.type_desc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type_desc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n         class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.my_fullname), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </span>\n  <span class=\"count\"><span class=\"value\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.num_unread), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></span>\n  <span class=\"arrow\"><i class=\"icon-vector-chevron-down\"></i></span>\n</li>\n";
  return buffer;
  });
templates['user_presence_rows'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n"
    + escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},data:data},helper ? helper.call(depth0, "user_presence_row", options) : helperMissing.call(depth0, "partial", "user_presence_row", options)))
    + "\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.users), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['user_sidebar_actions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Narrow to private messages with <b>__name__</b>";
  }

function program3(depth0,data) {
  
  
  return "Narrow to messages sent by <b>__name__</b>";
  }

function program5(depth0,data) {
  
  
  return "Compose a message to <b>__name__</b>";
  }

  buffer += "\n<ul class=\"nav nav-list user_popover\" data-email=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <li>\n    <a class=\"narrow_to_private_messages\">\n      <i class=\"icon-vector-user\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"narrow_to_messages_sent\">\n      <i class=\"icon-vector-bullhorn\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n  <li>\n    <a class=\"compose_private_message\">\n      <i class=\"icon-vector-edit\"></i>\n      ";
  stack1 = (helper = helpers.tr || (depth0 && depth0.tr),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "tr", depth0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n\n</ul>\n";
  return buffer;
  });
})();