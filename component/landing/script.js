export const landing = {
    format: async function() {
        try {
            const response = await fetch('./component/landing/template.html?v=' + Date.now());
            if (!response.ok) return "Erreur : Fichier template non trouvé";
            return await response.text();
        } catch (error) {
            return "";
        }
    }
};