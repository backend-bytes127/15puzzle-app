/*
This class will help generate the data. This could also be a service
to extract data from somewhere else
*/

export class DataLoader {
    private m_data;
    constructor() {

    }

    getData() {
        return [{value: 4, color: 'blue'},
        {value: 0, color: 'blue'},
        {value: 6, color: 'blue'},
        {value: 2, color: 'blue'},
        {value: 8, color: 'blue'},
        {value: 1, color: 'blue'},
        {value: 10, color: 'blue'},
        {value: 3, color: 'blue'},
        {value: 12, color: 'blue'},
        {value: 5, color: 'blue'},
        {value: 14, color: 'blue'},
        {value: 7, color: 'blue'},
        {value: null, color: 'yellow'},
        {value: 9, color: 'blue'},
        {value: 13, color: 'blue'},
        {value: 11, color: 'blue'}
        ];
    }
}