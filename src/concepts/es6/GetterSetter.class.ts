export default class Name {
	private __name: string

	constructor(name: string) {
		this.name = name
	}

	get name() {
		return this.__name.toUpperCase()
	}

	set name(name) {
		this.__name = `Class ${name}`
	}
}