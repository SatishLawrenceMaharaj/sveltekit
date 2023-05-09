//a class to store functions
import { PUBLIC_API_URL } from '$env/static/public';
import mainStore from '$lib/stores/mainStore';
import { main } from '@popperjs/core';

export default class Service {
	endpoint: string;
	store: any;
	constructor() {
		this.endpoint = PUBLIC_API_URL;
		mainStore.subscribe((value) => {
			this.store = value;
		});
	}
	/*
	async delete(path: string) {
		return fetch(`${this.endpoint}/${path}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${this.store.access_token}`
			}
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					res.json().then((json) => {
						if (!json.ok) {
							mainStore.update((store) => {
								store.notification = {
									message: json.message,
									type: 'error',
									active: true
								};
								return store;
							});
						}
						return null;
					});
				}
			})

			.catch((err) => {
				console.log(err);
			});
	}

	async put(path: string, body: object) {
		return fetch(`${this.endpoint}/${path}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${this.store.access_token}`
			},
			body: JSON.stringify(body)
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					res.json().then((json) => {
						if (!json.ok) {
							mainStore.update((store) => {
								store.notification = {
									message: json.message,
									type: 'error',
									active: true
								};
								return store;
							});
						}
						return null;
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	*/
}
