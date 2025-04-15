import { ShoppingBasketIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full p-2 md:p-4 border-b">
      <div className="flex space-x-3 items-center">
        <ShoppingBasketIcon className="w-8 h-8 text-primary" />
        <h1 className="text-xl font-bold">Shirman Group</h1>
      </div>
    </header>
  );
}
