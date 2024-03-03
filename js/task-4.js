function getShippingCost(country)
{
    let price;
    switch(country)
    {
        case "China":
            price = 100;
        break;

        case "Chile":
            price = 250;
        break;

        case "Australia":
            price = 170;
        break;
        case "Jamaica":
            price = 120;
        break;
        default: 
        return "Sorry, there is no delivery to your country";
    }
    return `Shipping to ${country} will cost ${price} credits`
}

// Залиш цей код для перевірки ментором.
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// На що буде звертати увагу ментор при перевірці:

// Оголошена функція getShippingCost(country)
// У тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"