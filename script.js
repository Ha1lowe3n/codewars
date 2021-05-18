function likes(names) {
    const strs = {
        0: "no one",
        1: `${names}`,
        2: `${names[0]} and ${names[1]}`,
        3: `${names[0]}, ${names[1]} and ${names[2]}`,
        more: `${names[0]}, ${names[1]} and ${names.length - 2}`,
    };

    const s = names.length < 2 ? "s" : "";
    const others = !strs[names.length] ? " others" : "";

    return `${strs[names.length] || strs["more"]}${others} like${s} this`;
}

// 'no one likes this'
console.log(likes([]));

// 'Peter likes this'
console.log(likes(["Peter"]));

// 'Jacob and Alex like this'
console.log(likes(["Jacob", "Alex"]));

// 'Max, John and Mark like this'
console.log(likes(["Max", "John", "Mark"]));

// 'Alex, Jacob and 2 others like this'
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
