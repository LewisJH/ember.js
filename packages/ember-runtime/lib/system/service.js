import Object from "ember-runtime/system/object";
import { createInjectionHelper } from 'ember-runtime/inject';


/**
  Creates a property that lazily looks up a service in the container. There
  are no restrictions as to what objects a service can be injected into.

  Example:

  ```javascript
  App.ApplicationRoute = Ember.Route.extend({
    authManager: Ember.inject.service('auth'),

    model: function() {
      return this.get('authManager').findCurrentUser();
    }
  });
  ```

  This example will create an `authManager` property on the application route
  that looks up the `auth` service in the container, making it easily
  accessible in the `model` hook.

  @method inject.service
  @for Ember
  @param {String} name (optional) name of the service to inject, defaults to
         the property's name
  @return {Ember.InjectedProperty} injection descriptor instance
*/
createInjectionHelper('service');

/**
  @class Service
  @namespace Ember
  @extends Ember.Object
*/
export default Object.extend();
