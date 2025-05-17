import { OutfitSuggestion } from "@/features/outfitSuggestion/types/outfitSuggestion.types";

interface OutfitSuggestionCardProps {
    title: string;
    outfit: OutfitSuggestion;
}

export function OutfitSuggestionCard({ title, outfit }: OutfitSuggestionCardProps) {
    return (
        <div className="card text-centter m-2">
            <div className="card-body">
                <h5 className="card-header fw-bold">
                    {title}
                </h5>
                <div className="card-text">
                    <p>Head Wear: {outfit.headWear?.toString()}</p>
                    <p>Top: {outfit.top.toString()}</p>
                    <p>Bottom: {outfit.bottom.toString()}</p>
                    <p>Shoes: {outfit.shoes.toString()}</p>
                </div>
            </div>
        </div>
    );
}