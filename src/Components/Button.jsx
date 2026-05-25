const Button = ({ className = '', size = 'default', children, onClick }) => {
    const baseClasses = 'relative overflow-hidden rounded-full bg-[#ec4899] text-white transition-colors duration-200 hover:bg-[#db2777]';
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        default: 'px-6 py-2 text-base',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${sizeClasses[size] ?? sizeClasses.default} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
