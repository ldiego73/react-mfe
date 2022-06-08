# Microfrontend

## Structure

```
apps/
    shell               -> shell                http://localhost:3000
    home                -> microfrontend        http://localhost:3100
    appointment         -> microfrontend        http://localhost:3200
    medical-advice      -> microfrontend        http://localhost:3300
    my-health           -> microfrontend        http://localhost:3400
    navigation          -> component            import
    botton-navigation   -> component            import
    header              -> component            import
libs/
    micro-config        -> configuration        import
    react-utils         -> utils                import
dependencies (npm)/
    payment             -> external library     code artifacts
    oauth               -> external library     code artifacts
```

## Create microfrontend

**Step 1**: Install microfrontend
```
npx create-react-app <name> --template typescript
```

**Step 2**: Install dependencies
```
"@micro/config": "*"
"react-utils": "*"
```
