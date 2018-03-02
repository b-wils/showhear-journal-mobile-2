// Wrapper around device storage

// Bug with react-native.AsyncStorage on Genymotion
// https://github.com/facebook/react-native/issues/7605

import { SecureStore } from 'expo';

export function getItem(key) {
	return SecureStore.getItemAsync(key);
}

export function setItem(key, value) {
	return SecureStore.setItemAsync(key, value);
}