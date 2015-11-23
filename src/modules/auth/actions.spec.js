import thunk from 'redux-thunk';

import {
  createMockStore,
  createStubStore
} from 'test/utils';

import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';

import {
  initAuth,
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
  signOut
} from './actions';


describe('Auth actions', () => {
  describe('initAuth', () => {
    it('should create INIT_AUTH when authenticated', (done) => {
      const authData = {uid: '123'};
      const firebase = new MockFirebase();

      const expectedActions = [(action) => {
        return action.type === INIT_AUTH &&
          action.payload === authData &&
          typeof action.meta.timestamp === 'number';
      }];

      const store = createMockStore({firebase}, expectedActions, [thunk], done);

      // call with params to change auth state to `authenticated`
      firebase.changeAuthState(authData);
      firebase.flush();

      store.dispatch(initAuth());
    });

    it('should create INIT_AUTH when not authenticted', (done) => {
      const firebase = new MockFirebase();

      const expectedActions = [(action) => {
        return action.type === INIT_AUTH &&
          action.payload === null &&
          typeof action.meta.timestamp === 'number';
      }];

      const store = createMockStore({firebase}, expectedActions, [thunk], done);

      store.dispatch(initAuth());
    });
  });

  describe('signInWithGithub', () => {
    it('should invoke Firebase#authWithOAuthPopup() with param `github`', () => {
      const firebase = new MockFirebase();
      sinon.stub(firebase, 'authWithOAuthPopup');

      const store = createStubStore({firebase}, [thunk]);

      store.dispatch(signInWithGithub());
      expect(firebase.authWithOAuthPopup.calledWith('github')).toBe(true);
    });

    it('should create SIGN_IN_SUCCESS', (done) => {
      const authData = {uid: '123'};
      const firebase = new MockFirebase();

      const expectedActions = [(action) => {
        return action.type === SIGN_IN_SUCCESS &&
          action.payload.uid === authData.uid &&
          typeof action.meta.timestamp === 'number';
      }];

      const store = createMockStore({firebase}, expectedActions, [thunk], done);

      // call with params to change auth state to `authenticated`
      firebase.changeAuthState(authData);

      store.dispatch(signInWithGithub());
      firebase.flush();
    });
  });

  describe('signInWithGoogle', () => {
    it('should invoke Firebase#authWithOAuthPopup() with param `google`', () => {
      const firebase = new MockFirebase();
      sinon.stub(firebase, 'authWithOAuthPopup');

      const store = createStubStore({firebase}, [thunk]);

      store.dispatch(signInWithGoogle());
      expect(firebase.authWithOAuthPopup.calledWith('google')).toBe(true);
    });

    it('should create SIGN_IN_SUCCESS', (done) => {
      const authData = {uid: '123'};
      const firebase = new MockFirebase();

      const expectedActions = [(action) => {
        return action.type === SIGN_IN_SUCCESS &&
          action.payload.uid === authData.uid &&
          typeof action.meta.timestamp === 'number';
      }];

      const store = createMockStore({firebase}, expectedActions, [thunk], done);

      // call with params to change auth state to `authenticated`
      firebase.changeAuthState(authData);

      store.dispatch(signInWithGoogle());
      firebase.flush();
    });
  });

  describe('signInWithTwitter', () => {
    it('should invoke Firebase#authWithOAuthPopup() with param `twitter`', () => {
      const firebase = new MockFirebase();
      sinon.stub(firebase, 'authWithOAuthPopup');

      const store = createStubStore({firebase}, [thunk]);

      store.dispatch(signInWithTwitter());
      expect(firebase.authWithOAuthPopup.calledWith('twitter')).toBe(true);
    });

    it('should create SIGN_IN_SUCCESS', (done) => {
      const authData = {uid: '123'};
      const firebase = new MockFirebase();

      const expectedActions = [(action) => {
        return action.type === SIGN_IN_SUCCESS &&
          action.payload.uid === authData.uid &&
          typeof action.meta.timestamp === 'number';
      }];

      const store = createMockStore({firebase}, expectedActions, [thunk], done);

      // call with params to change auth state to `authenticated`
      firebase.changeAuthState(authData);

      store.dispatch(signInWithTwitter());
      firebase.flush();
    });
  });

  describe('signOut', () => {
    it('should call Firebase#unauth', () => {
      const firebase = new MockFirebase();
      sinon.stub(firebase, 'unauth');

      const store = createStubStore({firebase}, [thunk]);

      store.dispatch(signOut());
      expect(firebase.unauth.callCount).toBe(1);
    });

    it('should create SIGN_OUT_SUCCESS', (done) => {
      const firebase = new MockFirebase();

      const expectedActions = [
        {type: SIGN_OUT_SUCCESS}
      ];

      const store = createMockStore({firebase}, expectedActions, [thunk], done);

      store.dispatch(signOut());
      firebase.flush();
    });
  });
});
