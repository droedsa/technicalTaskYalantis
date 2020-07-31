export class UsersService {
    _apiBase ='https://yalantis-react-school-api.yalantis.com/api/task0/users';

    _getResource = async () => {
        const res = await fetch(this._apiBase);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getUsers = async () => {
        const res = await this._getResource();
        return res
    };

    _setColor

}
