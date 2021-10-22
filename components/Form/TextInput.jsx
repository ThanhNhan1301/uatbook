export default function TextInput({
    type,
    title,
    onChange,
    disabled,
    name,
    register,
    placeholder,
    required,
    options,
    style,
    autoComplete,
    defaultValue,
}) {
    const registerInput = register ? register(name, { options }) : {}
    return (
        <div className='w-full my-3'>
            {title && <div className='mb-1 font-semibold text-green-900'>{title}</div>}
            <input
                autoComplete={autoComplete && autoComplete}
                type={type ? type : 'text'}
                onChange={onChange && onChange}
                disabled={disabled && disabled}
                placeholder={placeholder && placeholder}
                required={required && required}
                defaultValue={defaultValue && defaultValue}
                className='
                    w-full px-3 py-2 text-sm
                    border-[3px] border-green-500 
                    rounded-lg outline-none focus:border-green-900 
                '
                {...registerInput}
                style={{ ...style }}
            />
        </div>
    )
}
