const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        //  y: 0,
        transition: {
            duration: 1.2,
            type: 'tween'
        }
    }
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5
            // duration: 3
        }
    }
};

export { item, container };
