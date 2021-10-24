export default function TextInput({
    type = 'text',
    title,
    onChange,
    disabled = false,
    name,
    register,
    placeholder = '',
    required = false,
    options = {},
    style = {},
    autoComplete,
    value,
}) {
    const registerInput = register ? { ...register(name, { options }) } : {}
    const handleOnChange = (e) => {
        onChange && onChange(e)
    }
    return (
        <div className='w-full my-2'>
            {title && <div className='mb-1 font-semibold text-green-900'>{title}</div>}
            <input
                name={name}
                className='
                    w-full px-3 py-2 text-sm
                    border-[2px] border-green-500
                    rounded-lg outline-none focus:border-green-900
                '
                onChange={handleOnChange}
                autoComplete={autoComplete && autoComplete}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                required={required}
                value={value && value}
                {...registerInput}
                style={style}
            />
        </div>
    )
}
