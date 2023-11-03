
const TextAreaWithCharacterLimit = (props) => {
    const { maxchars, watch, ...rest } = props;

    return (
        <div className='flex flex-col gap-1.5'>
            <legend className='text-xs text-light'>Description</legend>
            <div className='relative'>
                <textarea
                    {...rest}
                    rows={8}
                    className='w-full text-light bg-[rgba(255,255,255,0.01)] resize-none outline-none rounded-md p-3 border border-[rgba(255,255,255,0.15)] focus:border-2 '
                />
                <p className='absolute bottom-1.5 right-1.5 text-xs text-light'>
                    {`${watch(props.name).length}/${maxchars}`}
                </p>
            </div>

        </div>
    );
};

export default TextAreaWithCharacterLimit;
