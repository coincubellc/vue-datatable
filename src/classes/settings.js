import objectPath from 'object-path';

class Settings {
    constructor(){
        this.properties = {
            table: {
                class: 'table table-hover table-striped',
                row: {
                    classes: ['']
                },
                sorting: {
                    classes: {
                        canSort: ['sort'],
                        sortNone: ['fas', 'fa-sort-amount-down'],
                        sortAsc: ['fas', 'fa-sort-alpha-down'],
                        sortDesc: ['fas', 'fa-sort-alpha-up'],
                    }
                }
            },
            pager: {
                classes: {
                    pager: 'pagination',
                    li: 'page-item',
                    a: 'page-link',
                    selected: 'active',
                    disabled: 'disabled'
                },
                icons: {
                    previous: '&lt;',
                    next: '&gt;',
                }
            }
        };
    }

    get(path){
        return objectPath.get(this.properties, path);
    }

    set(path, value){
        objectPath.set(this.properties, path, value);

        return this;
    }

    merge(settings){
        this.properties = this._mergeObjects(this.properties, settings);

        return this;
    }

    _mergeObjects(obj_1, obj_2){
        for(var key in obj_2){

            if(obj_2[key] === null){
                obj_1[key] = obj_2[key];

                continue;
            }else if(typeof obj_2[key] === 'object'){
                obj_1[key] = this._mergeObjects(obj_1[key], obj_2[key]);

                continue;
            }

            obj_1[key] = obj_2[key];
        }

        return obj_1;
    }
}

export default Settings;
