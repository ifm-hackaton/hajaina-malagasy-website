export const loadTimelines = async (namespaces:string[]) => {
    return Promise.all(namespaces.map(path => 
        import(`./timelines/${path}`))
    ).then(modules => 
        modules.map(module => module.default
    ));
}