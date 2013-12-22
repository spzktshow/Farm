/**
 * Created by rocklee on 13-12-21.
 */
moonSugar.MSGroupItem = cc.Class.extend(
    {
        name:null,

        init:function (name)
        {
            if (this._super())
            {
                this.name = name;
                return true;
            }
            return false;
        }
    }
)


moonSugar.MSGroup = cc.Class.extend(
    {
        items:null,

        init:function()
        {
            this.items = [];
        },
        /**
         *
         * @param name
         * @returns {MSGroupItem}
         */
        getItem:function(name)
        {
            var index = this._checkItem(name);
            if (index != -1) return this.items[index];
            return null;
        },
        /**
         *
         * @param index
         * @returns {MSGroupItem}
         */
        getItemIndex:function(index)
        {
            if (index >= 0 && index < this.items.length) return this.items[index];
            return null;
        },
        /**
         *
         * @param item
         * @param index
         * @returns {number}
         */
        addItemIndex:function(item, index)
        {
            if (index > this.items.length)
            {
                this.items.push(item);
                return this.items.length - 1;
            }
            else
            {
                this.items.splice(index, 0, item);
                return this.items.length - 1;
            }
            return -1;
        },
        /**
         *
         * @param item
         * @returns {number}
         */
        addItem:function(item)
        {
            return this.addItemIndex(item, this.items.length);
        },
        /**
         *
         * @param index
         * @returns {MSGroupItem}
         */
        removeItemIndex:function(index)
        {
            if (index >= 0 && index < this.items.length)
            {
                return this.items[index];
            }
            return null;
        },
        /***
         *
         * @param name
         * @returns {MSGroupItem}
         */
        removeItem:function(name)
        {
            var index = this._checkItem(name);
            if (index != -1) return this.items[index];
            return null;
        },
        /**
         *
         * @param name
         * @returns {number}
         * @private
         */
        _checkItem:function(name)
        {
            for (var i = 0; i < this.items.length; i ++)
            {
                var item = items[i];
                if (item.name == name) return i;
            }
            return -1;
        }
    }
)