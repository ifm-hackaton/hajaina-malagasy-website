import { Facebook, Mail, Twitter } from 'lucide-react'; // Vous pouvez remplacer Github par un autre fournisseur

type SocialButtonProps = {
  provider: 'facebook' | 'google' | 'other';
  variant?: 'login' | 'signin';
  onClick?: () => void;
};

const SocialButton = ({ provider, variant = 'login', onClick }: SocialButtonProps) => {
  const providers = {
    facebook: {
      icon: <Facebook className="w-5 h-5 md:w-7 md:h-7" />,
      text: 'Facebook',
      colors: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-700',
    },
    google: {
      icon: <Mail className="w-5 h-5 md:w-7 md:h-7" />,
      text: 'Gmail',
      colors: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-700',
    },
    other: {
      icon: <Twitter className="w-5 h-5 md:w-7 md:h-7" />,
      text: 'GitHub',
      colors: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-700',
    },
  };

  const { icon, text, colors } = providers[provider];

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${colors} text-white rounded-full py-5 px-5 mb-2 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-opacity-50 inline-flex items-center justify-center transition-colors`}
    >
      {icon}
      {/* <span className="ml-2">
        {variant === 'login' ? `Se connecter avec ${text}` : `S'inscrire avec ${text}`}
      </span> */}
    </button>
  );
};

export default SocialButton;