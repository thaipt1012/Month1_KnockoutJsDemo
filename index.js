function Item(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
    this.price = ko.observable(data.price);
}

function ItemListViewModel() {
    // Data
    var self = this;
    self.items = ko.observableArray([]);
    self.newItemText = ko.observable();
    self.newItemPrice = ko.observable();
    self.incompleteItems = ko.computed(function() {
        return ko.utils.arrayFilter(self.items(), function(item) {
            return !item.isDone()
        });
    });

    // Operations
    self.addItem = function() {
        self.items.push(
            new Item({ title: this.newItemText(), price: this.newItemPrice() })
        );
        self.newItemText("");
        self.newItemPrice("");
    };
    //self.removeItem = function(item) { self.items.remove(item) };
}

//ko.applyBindings(new ItemListViewModel());
console.log("abc");