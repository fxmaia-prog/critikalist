const strains = [
  ["Acapulco Gold", 80, 20, 19, 0.4, "Sativa", "Mexican landrace", "Myrcene", ["honey", "coffee", "earth"], ["bright", "creative", "social"], "Old-school golden flower with an upbeat, spicy-earth profile."],
  ["Afghan Kush", 5, 95, 20, 0.5, "Indica", "Hindu Kush landrace", "Myrcene", ["earth", "hash", "pine"], ["heavy", "calm", "sleepy"], "Dense resinous classic valued for deep body weight and hashy aroma."],
  ["AK-47", 65, 35, 20, 0.3, "Sativa", "Colombian x Mexican x Thai x Afghani", "Caryophyllene", ["spice", "sweet", "floral"], ["talkative", "clear", "uplifted"], "Balanced heritage hybrid with a sharper cerebral edge."],
  ["Alaskan Thunder Fuck", 80, 20, 21, 0.2, "Sativa", "Northern California x Russian Ruderalis x Afghani", "Pinene", ["pine", "diesel", "menthol"], ["energetic", "focused", "euphoric"], "Cold-climate legend with bright pine and diesel lift."],
  ["Amnesia Haze", 80, 20, 22, 0.2, "Sativa", "Haze x landrace mix", "Terpinolene", ["citrus", "incense", "pepper"], ["cerebral", "creative", "upbeat"], "Hazy citrus profile with long, electric momentum."],
  ["Apple Fritter", 50, 50, 24, 0.1, "Hybrid", "Sour Apple x Animal Cookies", "Caryophyllene", ["apple", "dough", "vanilla"], ["relaxed", "happy", "balanced"], "Dessert hybrid known for baked-fruit aroma and sturdy potency."],
  ["Banana Kush", 40, 60, 21, 0.2, "Hybrid", "Ghost OG x Skunk Haze", "Limonene", ["banana", "cream", "tropical"], ["mellow", "happy", "cozy"], "Creamy tropical kush with a relaxed but not fully locked feel."],
  ["Biscotti", 20, 80, 25, 0.1, "Indica", "Gelato #25 x South Florida OG", "Caryophyllene", ["cookie", "diesel", "spice"], ["calm", "euphoric", "hungry"], "Potent cookie-family indica with savory pastry and gas notes."],
  ["Black Jack", 70, 30, 20, 0.2, "Sativa", "Black Domina x Jack Herer", "Terpinolene", ["pine", "spice", "citrus"], ["focused", "clear", "energetic"], "A sharper Jack-style sativa with a darker resinous base."],
  ["Black Mamba", 15, 85, 23, 0.1, "Indica", "Granddaddy Purple x Black Domina", "Myrcene", ["grape", "earth", "berry"], ["sedating", "calm", "body-heavy"], "Dark berry indica made for slow evenings and low light."],
  ["Blue Cheese", 20, 80, 19, 0.3, "Indica", "Blueberry x UK Cheese", "Myrcene", ["blueberry", "funk", "cream"], ["relaxed", "sleepy", "snacky"], "Sweet berry funk with a rounded, old-school body effect."],
  ["Blue Dream", 60, 40, 20, 0.2, "Hybrid", "Blueberry x Haze", "Myrcene", ["berry", "sweet", "herbal"], ["balanced", "creative", "gentle"], "Famous all-day hybrid with sweet berry and soft haze lift."],
  ["Blue Zkittlez", 30, 70, 22, 0.1, "Indica", "Blue Diamond x Zkittlez", "Limonene", ["candy", "berry", "citrus"], ["mellow", "happy", "relaxed"], "Candy-forward indica hybrid with smooth fruit and easygoing calm."],
  ["Bruce Banner", 60, 40, 26, 0.1, "Hybrid", "OG Kush x Strawberry Diesel", "Caryophyllene", ["diesel", "berry", "sweet"], ["euphoric", "strong", "creative"], "High-potency hybrid with diesel punch and strawberry edges."],
  ["Bubba Kush", 10, 90, 19, 0.3, "Indica", "OG Kush x unknown indica", "Caryophyllene", ["coffee", "earth", "chocolate"], ["sleepy", "calm", "heavy"], "Deep, coffee-toned kush for quiet nights and heavy relaxation."],
  ["Cannatonic", 50, 50, 8, 7.5, "Hybrid", "MK Ultra x G13 Haze", "Myrcene", ["citrus", "earth", "pine"], ["mild", "clear", "soothing"], "CBD-rich classic with a gentler psychoactive ceiling."],
  ["Chemdawg", 55, 45, 23, 0.2, "Hybrid", "Unknown heritage cultivar", "Caryophyllene", ["diesel", "chemical", "earth"], ["euphoric", "stoney", "bold"], "Fuel-heavy backbone behind many modern diesel and OG lines."],
  ["Cherry Pie", 20, 80, 21, 0.2, "Indica", "Granddaddy Purple x Durban Poison", "Myrcene", ["cherry", "pastry", "berry"], ["relaxed", "uplifted", "cozy"], "Sweet dessert indica hybrid with a little Durban sparkle."],
  ["Chocolope", 95, 5, 19, 0.1, "Sativa", "Chocolate Thai x Cannalope Haze", "Terpinolene", ["cocoa", "coffee", "melon"], ["energetic", "creative", "bright"], "Chocolate-haze sativa with unusually playful flavor."],
  ["Cinderella 99", 85, 15, 21, 0.2, "Sativa", "Jack Herer x Shiva Skunk", "Terpinolene", ["tropical", "citrus", "pine"], ["focused", "uplifted", "productive"], "Fast, clear sativa with a tropical candy snap."],
  ["Critical Mass", 20, 80, 20, 0.4, "Indica", "Afghani x Skunk #1", "Myrcene", ["earth", "honey", "skunk"], ["relaxed", "sleepy", "body"], "Big-yield indica with a mellow, weighty finish."],
  ["Death Star", 25, 75, 24, 0.2, "Indica", "Sensi Star x Sour Diesel", "Caryophyllene", ["diesel", "skunk", "sweet"], ["heavy", "euphoric", "quiet"], "Gas-forward indica hybrid with a slow-building grip."],
  ["Do-Si-Dos", 30, 70, 25, 0.1, "Indica", "Girl Scout Cookies x Face Off OG", "Limonene", ["lime", "cookie", "earth"], ["calm", "dreamy", "body"], "Modern dessert indica with OG depth and citrus brightness."],
  ["Durban Poison", 100, 0, 20, 0.1, "Sativa", "South African landrace", "Terpinolene", ["anise", "pine", "citrus"], ["energetic", "focused", "social"], "Pure sativa landmark with crisp licorice and citrus character."],
  ["Dutch Treat", 20, 80, 19, 0.3, "Indica", "Northern Lights x Haze", "Terpinolene", ["pine", "sweet", "eucalyptus"], ["happy", "calm", "clear"], "Amsterdam-style hybrid with aromatic pine and soft haze."],
  ["Forbidden Fruit", 30, 70, 23, 0.1, "Indica", "Cherry Pie x Tangie", "Myrcene", ["mango", "berry", "citrus"], ["relaxed", "blissful", "sleepy"], "Deep fruit-basket indica with vivid citrus peel."],
  ["Gelato", 45, 55, 24, 0.1, "Hybrid", "Sunset Sherbet x Thin Mint GSC", "Caryophyllene", ["cream", "berry", "mint"], ["euphoric", "smooth", "balanced"], "Dessert icon with creamy sweetness and polished potency."],
  ["Gelonade", 70, 30, 23, 0.1, "Sativa", "Lemon Tree x Gelato #41", "Limonene", ["lemon", "cream", "gas"], ["bright", "social", "happy"], "Citrus dessert sativa hybrid with a clean zesty top note."],
  ["GG4", 37, 63, 25, 0.1, "Hybrid", "Chem's Sister x Sour Dubb x Chocolate Diesel", "Caryophyllene", ["diesel", "earth", "sour"], ["heavy", "euphoric", "sticky"], "Sticky, powerful hybrid known for earthy fuel and body lock."],
  ["Girl Scout Cookies", 40, 60, 24, 0.1, "Hybrid", "OG Kush x Durban Poison", "Caryophyllene", ["cookie", "mint", "earth"], ["euphoric", "relaxed", "creative"], "Cookie-family foundation balancing Durban sparkle and OG weight."],
  ["GMO Cookies", 10, 90, 28, 0.1, "Indica", "Girl Scout Cookies x Chemdawg", "Caryophyllene", ["garlic", "diesel", "mushroom"], ["heavy", "sedating", "hungry"], "Savory, loud indica with massive chem-cookie density."],
  ["Granddaddy Purple", 20, 80, 19, 0.2, "Indica", "Purple Urkle x Big Bud", "Myrcene", ["grape", "berry", "earth"], ["sleepy", "calm", "body"], "Purple classic with grape candy aroma and couchy calm."],
  ["Green Crack", 85, 15, 19, 0.1, "Sativa", "Skunk #1 heritage", "Myrcene", ["mango", "citrus", "skunk"], ["energetic", "focused", "sharp"], "Bright mango-skunk sativa made for daytime momentum."],
  ["Harlequin", 75, 25, 6, 9, "Sativa", "Colombian Gold x Thai x Swiss x Nepali", "Myrcene", ["mango", "earth", "pepper"], ["clear", "mild", "functional"], "CBD-forward sativa with a grounded, clear-headed profile."],
  ["Headband", 40, 60, 22, 0.2, "Hybrid", "OG Kush x Sour Diesel", "Caryophyllene", ["diesel", "lemon", "cream"], ["relaxed", "heady", "euphoric"], "OG-diesel hybrid with a signature pressure-like head feel."],
  ["Hindu Kush", 0, 100, 18, 0.4, "Indica", "Hindu Kush landrace", "Myrcene", ["sandalwood", "hash", "earth"], ["sleepy", "still", "body"], "Pure mountain indica with incense, hash, and mineral earth."],
  ["Ice Cream Cake", 25, 75, 24, 0.1, "Indica", "Wedding Cake x Gelato #33", "Limonene", ["vanilla", "cream", "dough"], ["calm", "happy", "sleepy"], "Smooth dessert indica with thick vanilla and gentle heaviness."],
  ["Jack Herer", 55, 45, 20, 0.2, "Sativa", "Haze x Northern Lights #5 x Shiva Skunk", "Terpinolene", ["pine", "spice", "citrus"], ["clear", "creative", "uplifted"], "Crisp classic with pine-spice clarity and broad appeal."],
  ["Jelly Donut", 40, 60, 22, 0.1, "Hybrid", "Purple Punch x French Toast", "Limonene", ["berry", "dough", "sugar"], ["happy", "relaxed", "snacky"], "Sweet bakery hybrid with fruit glaze and soft body warmth."],
  ["Khalifa Kush", 80, 20, 26, 0.1, "Sativa", "OG Kush selection", "Limonene", ["lemon", "pine", "gas"], ["uplifted", "focused", "strong"], "Potent OG-leaning sativa selection with lemon fuel."],
  ["LA Confidential", 5, 95, 20, 0.2, "Indica", "OG LA Affie x Afghani", "Myrcene", ["pine", "earth", "skunk"], ["sleepy", "calm", "deep"], "Classic LA indica with piney earth and a heavy landing."],
  ["Lamb's Bread", 95, 5, 19, 0.2, "Sativa", "Jamaican landrace", "Caryophyllene", ["herbal", "spice", "grass"], ["creative", "upbeat", "clear"], "Jamaican sativa known for bright, contemplative lift."],
  ["Lemon Cherry Gelato", 40, 60, 25, 0.1, "Hybrid", "Sunset Sherbet x GSC x unknown", "Limonene", ["lemon", "cherry", "cream"], ["euphoric", "smooth", "relaxed"], "Glossy fruit-dessert hybrid with citrus candy and cream."],
  ["Lemon Haze", 70, 30, 20, 0.2, "Sativa", "Silver Haze x Lemon Skunk", "Limonene", ["lemon", "zest", "sweet"], ["bright", "social", "energetic"], "Sparkling citrus sativa hybrid with clean daytime lift."],
  ["MAC", 50, 50, 24, 0.1, "Hybrid", "Alien Cookies x Colombian x Starfighter", "Limonene", ["orange", "cream", "floral"], ["balanced", "euphoric", "polished"], "Modern hybrid with citrus cream and exceptional bag appeal."],
  ["Maui Wowie", 80, 20, 18, 0.2, "Sativa", "Hawaiian landrace", "Myrcene", ["pineapple", "tropical", "pine"], ["happy", "energetic", "beachy"], "Island sativa with tropical sweetness and breezy energy."],
  ["Mimosa", 70, 30, 22, 0.1, "Sativa", "Clementine x Purple Punch", "Limonene", ["orange", "berry", "champagne"], ["uplifted", "social", "focused"], "Brunch-bright hybrid with orange peel and purple fruit."],
  ["Northern Lights", 5, 95, 18, 0.3, "Indica", "Afghani x Thai", "Myrcene", ["pine", "earth", "sweet"], ["sleepy", "calm", "body"], "Iconic indica with resinous pine and a soft, classic finish."],
  ["OG Kush", 45, 55, 23, 0.2, "Hybrid", "Chemdawg x Lemon Thai x Hindu Kush", "Myrcene", ["fuel", "pine", "lemon"], ["euphoric", "relaxed", "bold"], "Foundational West Coast profile: fuel, pine, citrus, and weight."],
  ["Orange Cookies", 60, 40, 21, 0.1, "Hybrid", "Girl Scout Cookies x Orange Juice", "Limonene", ["orange", "cookie", "sweet"], ["happy", "creative", "mellow"], "Bright orange-cookie hybrid with a smooth dessert finish."],
  ["Papaya", 40, 60, 21, 0.2, "Hybrid", "Citral #13 x Ice #2", "Myrcene", ["papaya", "tropical", "earth"], ["relaxed", "happy", "body"], "Tropical fruit hybrid with a musky, calming backbone."],
  ["Peanut Butter Breath", 30, 70, 24, 0.1, "Indica", "Do-Si-Dos x Mendo Breath", "Caryophyllene", ["nutty", "earth", "herbal"], ["calm", "sedating", "dreamy"], "Savory nutty indica hybrid with a dense, quiet feel."],
  ["Pineapple Express", 60, 40, 20, 0.2, "Hybrid", "Trainwreck x Hawaiian", "Caryophyllene", ["pineapple", "cedar", "sweet"], ["happy", "energetic", "social"], "Tropical hybrid with approachable lift and a cedar-spice tail."],
  ["Pink Runtz", 50, 50, 24, 0.1, "Hybrid", "Runtz phenotype", "Limonene", ["candy", "berry", "tropical"], ["euphoric", "giggly", "relaxed"], "Candy-bright balanced hybrid with polished modern potency."],
  ["Purple Haze", 85, 15, 18, 0.2, "Sativa", "Purple Thai x Haze", "Myrcene", ["berry", "spice", "earth"], ["creative", "upbeat", "nostalgic"], "Classic purple sativa with berry spice and a psychedelic reputation."],
  ["Purple Punch", 20, 80, 21, 0.1, "Indica", "Larry OG x Granddaddy Purple", "Caryophyllene", ["grape", "berry", "vanilla"], ["sleepy", "happy", "body"], "Grape dessert indica with a plush, bedtime-leaning finish."],
  ["Runtz", 50, 50, 24, 0.1, "Hybrid", "Zkittlez x Gelato", "Caryophyllene", ["candy", "tropical", "cream"], ["euphoric", "relaxed", "social"], "Candy-gas modern hybrid with creamy fruit and balanced effects."],
  ["Sour Diesel", 90, 10, 22, 0.2, "Sativa", "Chemdawg x Super Skunk", "Caryophyllene", ["diesel", "sour", "citrus"], ["energetic", "talkative", "cerebral"], "Iconic fuel sativa with fast lift and unmistakable aroma."],
  ["Strawberry Cough", 80, 20, 19, 0.2, "Sativa", "Strawberry Fields x Haze", "Myrcene", ["strawberry", "sweet", "pepper"], ["social", "uplifted", "clear"], "Sweet berry sativa known for friendly, conversation-ready lift."],
  ["Sunset Sherbet", 15, 85, 21, 0.1, "Indica", "Girl Scout Cookies x Pink Panties", "Caryophyllene", ["sherbet", "berry", "citrus"], ["relaxed", "happy", "mellow"], "Creamy citrus-berry indica hybrid with a polished dessert nose."],
  ["Super Lemon Haze", 80, 20, 21, 0.2, "Sativa", "Lemon Skunk x Super Silver Haze", "Terpinolene", ["lemon", "candy", "spice"], ["energetic", "creative", "bright"], "Award-winning citrus haze with sharp lemon candy energy."],
  ["Super Silver Haze", 80, 20, 20, 0.1, "Sativa", "Skunk x Northern Lights x Haze", "Terpinolene", ["spice", "citrus", "earth"], ["uplifted", "focused", "classic"], "Haze benchmark with layered spice and long sativa glide."],
  ["Tangie", 70, 30, 19, 0.1, "Sativa", "California Orange x Skunk", "Myrcene", ["tangerine", "sweet", "skunk"], ["happy", "creative", "energetic"], "Explosive tangerine sativa hybrid with skunky brightness."],
  ["Trainwreck", 80, 20, 21, 0.1, "Sativa", "Mexican x Thai x Afghani", "Terpinolene", ["pine", "lemon", "spice"], ["fast", "euphoric", "heady"], "Classic high-speed hybrid with pine, citrus, and spice."],
  ["Wedding Cake", 40, 60, 24, 0.1, "Hybrid", "Triangle Kush x Animal Mints", "Limonene", ["vanilla", "pepper", "dough"], ["relaxed", "euphoric", "balanced"], "Dense dessert hybrid with peppered vanilla and strong finish."],
  ["White Widow", 60, 40, 20, 0.2, "Hybrid", "Brazilian sativa x South Indian indica", "Myrcene", ["earth", "wood", "spice"], ["social", "creative", "balanced"], "Resin-heavy Amsterdam classic with crisp hybrid effects."],
  ["Zkittlez", 30, 70, 21, 0.1, "Indica", "Grape Ape x Grapefruit", "Caryophyllene", ["candy", "grape", "tropical"], ["happy", "relaxed", "soft"], "Fruit-candy indica hybrid with gentle, colorful aroma."],
  ["9 Pound Hammer", 20, 80, 22, 0.1, "Indica", "Gooberry x Hells OG x Jack the Ripper", "Myrcene", ["grape", "lime", "earth"], ["sleepy", "heavy", "calm"], "Heavy indica hybrid with fruit-lime edges and a strong finish."],
  ["Agent Orange", 75, 25, 19, 0.1, "Sativa", "Orange Velvet x Jack the Ripper", "Terpinolene", ["orange", "cheese", "sweet"], ["uplifted", "social", "creative"], "Tart orange sativa hybrid with a vivid citrus punch."],
  ["Animal Mints", 50, 50, 25, 0.1, "Hybrid", "Animal Cookies x SinMint Cookies", "Caryophyllene", ["mint", "cookie", "diesel"], ["euphoric", "relaxed", "strong"], "Cookie-mint hybrid with a potent, gassy finish."],
  ["Blackberry Kush", 20, 80, 20, 0.2, "Indica", "Afghani x Blackberry", "Myrcene", ["blackberry", "earth", "sweet"], ["sleepy", "calm", "cozy"], "Berry-rich indica with a soft, nighttime personality."],
  ["Candyland", 70, 30, 19, 0.1, "Sativa", "Granddaddy Purple x Platinum Cookies", "Caryophyllene", ["candy", "earth", "spice"], ["creative", "upbeat", "social"], "Sweet sativa hybrid with purple-cookie depth."],
  ["Cinex", 60, 40, 20, 0.1, "Hybrid", "Cinderella 99 x Vortex", "Limonene", ["citrus", "earth", "skunk"], ["focused", "creative", "clear"], "Functional hybrid with citrus snap and practical clarity."],
  ["Crescendo", 40, 60, 27, 0.1, "Hybrid", "Chem D x i95 x Mandarin Cookies", "Caryophyllene", ["gas", "orange", "earth"], ["euphoric", "strong", "relaxed"], "High-potency modern hybrid with citrus chem pressure."],
  ["Cereal Milk", 50, 50, 23, 0.1, "Hybrid", "Y Life x Snowman", "Limonene", ["milk", "berry", "vanilla"], ["smooth", "happy", "balanced"], "Creamy cereal-bowl hybrid with sweet dairy and fruit."],
  ["Donny Burger", 30, 70, 28, 0.1, "Indica", "GMO x Han Solo Burger", "Caryophyllene", ["garlic", "meat", "diesel"], ["heavy", "euphoric", "sedating"], "Savory fuel indica hybrid with serious weight."],
  ["Gary Payton", 50, 50, 25, 0.1, "Hybrid", "The Y x Snowman", "Caryophyllene", ["pepper", "gas", "mint"], ["focused", "euphoric", "balanced"], "Polished balanced hybrid with a peppery gas snap."],
  ["Grape Ape", 10, 90, 18, 0.3, "Indica", "Mendocino Purps x Skunk x Afghani", "Myrcene", ["grape", "berry", "earth"], ["sleepy", "relaxed", "mellow"], "Grape-heavy indica classic with plush purple calm."],
  ["Grease Monkey", 30, 70, 25, 0.1, "Indica", "GG4 x Cookies and Cream", "Caryophyllene", ["vanilla", "fuel", "nut"], ["calm", "euphoric", "heavy"], "Dessert-fuel indica hybrid with sticky, rich character."],
  ["J1", 70, 30, 20, 0.1, "Sativa", "Skunk #1 x Jack Herer", "Terpinolene", ["pine", "citrus", "skunk"], ["clear", "energetic", "focused"], "Jack-adjacent sativa hybrid with a clean pine bite."],
  ["King Louis XIII", 20, 80, 23, 0.1, "Indica", "OG Kush phenotype", "Myrcene", ["pine", "diesel", "earth"], ["sleepy", "heavy", "calm"], "Regal OG-style indica with loud pine fuel."],
  ["Kush Mints", 50, 50, 25, 0.1, "Hybrid", "Bubba Kush x Animal Mints", "Limonene", ["mint", "cookie", "gas"], ["balanced", "euphoric", "cool"], "Minty cookie hybrid with polished potency and kush depth."],
  ["Larry OG", 40, 60, 21, 0.2, "Hybrid", "OG Kush x SFV OG", "Caryophyllene", ["lemon", "pine", "fuel"], ["relaxed", "happy", "smooth"], "Lemon-pine OG hybrid with a friendly, rounded finish."],
  ["Lava Cake", 30, 70, 23, 0.1, "Indica", "Thin Mint GSC x Grape Pie", "Caryophyllene", ["chocolate", "grape", "mint"], ["calm", "happy", "sleepy"], "Dessert indica hybrid with chocolate-grape richness."],
  ["Mandarin Cookies", 60, 40, 24, 0.1, "Hybrid", "Forum Cut Cookies x Mandarin Sunset", "Limonene", ["mandarin", "cookie", "spice"], ["uplifted", "creative", "balanced"], "Orange-cookie hybrid with spicy citrus brightness."],
  ["Mendo Breath", 30, 70, 22, 0.1, "Indica", "OGKB x Mendo Montage", "Caryophyllene", ["vanilla", "caramel", "earth"], ["sleepy", "calm", "cozy"], "Caramel dessert indica with soft, full-body calm."],
  ["Motorbreath", 30, 70, 26, 0.1, "Indica", "Chemdawg x SFV OG", "Caryophyllene", ["diesel", "earth", "lemon"], ["strong", "heavy", "euphoric"], "High-octane chem-OG indica hybrid with fierce gas."],
  ["Platinum Cookies", 50, 50, 23, 0.1, "Hybrid", "OG Kush x Durban Poison", "Caryophyllene", ["cookie", "earth", "sweet"], ["happy", "relaxed", "balanced"], "Shiny cookie-family hybrid with dessert and earth notes."],
  ["SFV OG", 30, 70, 22, 0.2, "Indica", "OG Kush phenotype", "Limonene", ["lemon", "pine", "diesel"], ["relaxed", "euphoric", "body"], "San Fernando OG cut with lemon-pine fuel and body calm."],
  ["Sherblato", 50, 50, 24, 0.1, "Hybrid", "Sherbet x Gelato", "Limonene", ["sherbet", "cream", "berry"], ["smooth", "happy", "relaxed"], "Creamy dessert hybrid that sits right in the middle."],
  ["Slurricane", 20, 80, 24, 0.1, "Indica", "Do-Si-Dos x Purple Punch", "Caryophyllene", ["grape", "berry", "spice"], ["sleepy", "euphoric", "body"], "Purple dessert indica with a slow, stormy calm."],
  ["Sundae Driver", 50, 50, 21, 0.1, "Hybrid", "Fruity Pebbles OG x Grape Pie", "Myrcene", ["grape", "cream", "berry"], ["mellow", "happy", "balanced"], "Smooth dessert hybrid with berry cream and easy pace."],
  ["Tahoe OG", 10, 90, 22, 0.1, "Indica", "OG Kush phenotype", "Myrcene", ["earth", "lemon", "pine"], ["sleepy", "heavy", "calm"], "Strong OG indica with earthy lemon and deep night energy."],
  ["Tropicana Cookies", 70, 30, 22, 0.1, "Sativa", "Girl Scout Cookies x Tangie", "Caryophyllene", ["orange", "cookie", "tropical"], ["creative", "happy", "uplifted"], "Orange-cookie sativa hybrid with vivid citrus color and lift."],
  ["White Runtz", 50, 50, 24, 0.1, "Hybrid", "Zkittlez x Gelato", "Limonene", ["candy", "cream", "fruit"], ["euphoric", "relaxed", "smooth"], "Creamy candy hybrid with a silky, balanced experience."],
  ["ACDC", 50, 50, 6, 14, "Hybrid", "Cannatonic phenotype", "Myrcene", ["earth", "citrus", "sweet"], ["clear", "mild", "functional"], "CBD-rich cultivar often chosen when people want low-intoxicating balance."],
  ["Alien OG", 40, 60, 24, 0.1, "Hybrid", "Tahoe OG x Alien Kush", "Limonene", ["lemon", "pine", "earth"], ["euphoric", "relaxed", "strong"], "Potent OG-family hybrid with bright lemon and dense body weight."],
  ["Berry White", 35, 65, 20, 0.2, "Indica", "Blueberry x White Widow", "Myrcene", ["berry", "pine", "sweet"], ["calm", "happy", "smooth"], "Blueberry and White Widow heritage with a soft berry-pine finish."],
  ["Blueberry", 20, 80, 18, 0.3, "Indica", "Afghani x Thai x Purple Thai", "Myrcene", ["blueberry", "sweet", "vanilla"], ["relaxed", "sleepy", "happy"], "Legendary fruit-forward indica from the modern breeding canon."],
  ["Charlotte's Web", 50, 50, 1, 12, "Hybrid", "CBD-rich hemp cultivar", "Myrcene", ["earth", "pine", "floral"], ["clear", "mild", "non-intoxicating"], "Famous high-CBD cultivar known for very low THC expression."],
  ["Chem 91", 55, 45, 22, 0.1, "Hybrid", "Chemdawg phenotype", "Caryophyllene", ["diesel", "chemical", "pine"], ["euphoric", "heady", "bold"], "Historic chem cut behind many modern gas-heavy hybrids."],
  ["Clementine", 70, 30, 20, 0.1, "Sativa", "Tangie x Lemon Skunk", "Terpinolene", ["orange", "lemon", "sweet"], ["energetic", "focused", "bright"], "Citrus-forward sativa hybrid with clean orange-lemon momentum."],
  ["Cookies and Cream", 50, 50, 22, 0.1, "Hybrid", "Starfighter x Girl Scout Cookies", "Caryophyllene", ["vanilla", "cookie", "nut"], ["relaxed", "happy", "balanced"], "Dessert hybrid with creamy cookie notes and a polished finish."],
  ["G13", 30, 70, 21, 0.2, "Indica", "Afghani selection", "Myrcene", ["earth", "pine", "sweet"], ["calm", "body", "sleepy"], "Myth-heavy indica cultivar with earthy pine and deep relaxation."],
  ["Ghost OG", 45, 55, 21, 0.1, "Hybrid", "OG Kush phenotype", "Limonene", ["citrus", "pine", "earth"], ["euphoric", "relaxed", "smooth"], "Respected OG cut with lemon-pine clarity and kush depth."],
  ["Godfather OG", 40, 60, 28, 0.1, "Hybrid", "OG Kush x Granddaddy Purple lineage", "Caryophyllene", ["grape", "pine", "earth"], ["heavy", "euphoric", "sleepy"], "High-potency OG-style hybrid with a grape-earth undertone."],
  ["Golden Goat", 70, 30, 20, 0.1, "Sativa", "Hawaiian-Romulan x Island Sweet Skunk", "Terpinolene", ["tropical", "citrus", "spice"], ["creative", "uplifted", "social"], "Bright tropical sativa hybrid with a lively, expressive profile."],
  ["Island Sweet Skunk", 80, 20, 19, 0.1, "Sativa", "Sweet Skunk selection", "Terpinolene", ["grapefruit", "skunk", "tropical"], ["energetic", "happy", "social"], "Citrus-skunk sativa line known for daytime lift."],
  ["Kosher Kush", 20, 80, 23, 0.1, "Indica", "OG Kush lineage", "Myrcene", ["earth", "pine", "spice"], ["sleepy", "relaxed", "heavy"], "Award-winning kush with earthy spice and strong nighttime lean."],
  ["Lavender", 20, 80, 19, 0.2, "Indica", "Super Skunk x Big Skunk Korean x Afghani x Hawaiian", "Linalool", ["lavender", "floral", "spice"], ["calm", "sleepy", "soft"], "Floral indica with a distinctive lavender perfume."],
  ["Lemon Skunk", 60, 40, 19, 0.2, "Hybrid", "Skunk phenotype selections", "Limonene", ["lemon", "skunk", "sweet"], ["happy", "creative", "uplifted"], "Zesty skunk hybrid used in many citrus-forward crosses."],
  ["Master Kush", 10, 90, 20, 0.2, "Indica", "Hindu Kush x Skunk lineage", "Caryophyllene", ["earth", "incense", "citrus"], ["calm", "body", "sleepy"], "Classic Dutch kush with incense-like earth and a steady body feel."],
  ["NYC Diesel", 60, 40, 20, 0.2, "Hybrid", "Mexican x Afghani lineage", "Limonene", ["diesel", "lime", "grapefruit"], ["creative", "social", "uplifted"], "Citrus-fuel hybrid with old-school East Coast character."],
  ["Purple Urkle", 20, 80, 19, 0.2, "Indica", "Mendocino purple lineage", "Myrcene", ["grape", "berry", "skunk"], ["sleepy", "relaxed", "dreamy"], "Deep purple indica prized for grape aroma and slow calm."],
  ["Remedy", 25, 75, 1, 13, "Indica", "Cannatonic x Afghan Skunk", "Myrcene", ["lemon", "pine", "earth"], ["clear", "mild", "soothing"], "CBD-heavy profile with little intoxication and a calm read."],
  ["Romulan", 20, 80, 20, 0.2, "Indica", "North American indica lineage", "Pinene", ["pine", "earth", "spice"], ["relaxed", "sleepy", "focused"], "Pine-heavy indica with a focused but physical reputation."],
  ["Skywalker OG", 15, 85, 23, 0.1, "Indica", "Skywalker x OG Kush", "Myrcene", ["diesel", "pine", "spice"], ["heavy", "relaxed", "sleepy"], "OG-powered indica hybrid with fuel, pine, and body weight."],
  ["Super Skunk", 35, 65, 19, 0.2, "Indica", "Skunk #1 x Afghani", "Myrcene", ["skunk", "earth", "sweet"], ["relaxed", "happy", "body"], "Classic skunk-afghani hybrid with loud aroma and reliable calm."],
  ["Thai", 100, 0, 18, 0.1, "Sativa", "Thai landrace", "Terpinolene", ["spice", "citrus", "herbal"], ["energetic", "creative", "cerebral"], "Pure sativa landrace family known for spicy, electric lift."],
  ["The White", 50, 50, 22, 0.1, "Hybrid", "Unknown elite clone", "Caryophyllene", ["earth", "pine", "pepper"], ["balanced", "strong", "calm"], "Frost-heavy clone-only cultivar with a clean, potent profile."],
  ["UK Cheese", 35, 65, 19, 0.2, "Indica", "Skunk #1 phenotype", "Caryophyllene", ["cheese", "skunk", "earth"], ["happy", "relaxed", "social"], "Pungent skunk phenotype famous for its savory cheese aroma."],
  ["Watermelon Zkittlez", 30, 70, 23, 0.1, "Indica", "Zkittlez x Watermelon", "Limonene", ["watermelon", "candy", "berry"], ["relaxed", "happy", "mellow"], "Fruit-candy indica hybrid with juicy sweetness and soft calm."],
  ["XJ-13", 70, 30, 19, 0.2, "Sativa", "Jack Herer x G13 Haze", "Terpinolene", ["citrus", "pine", "spice"], ["clear", "creative", "upbeat"], "Clear-headed Jack/Haze hybrid with bright citrus-pine lift."]
].map(([name, sativa, indica, thc, cbd, type, lineage, terpene, flavors, effects, note], index) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name,
  sativa,
  indica,
  thc,
  cbd,
  type,
  lineage,
  terpene,
  flavors,
  effects,
  note,
  rank: index + 1
}));

const terpenes = [
  ["Myrcene", "earthy, musky, mango-like", "The most common dominant terpene in many cannabis catalogs. It often appears in kush, purple, skunk, and CBD-balanced profiles.", ["earth", "mango", "clove"], "Also found in mango, hops, lemongrass, and thyme.", "If a strain reads earthy, soft, and body-heavy, myrcene is often part of the explanation."],
  ["Limonene", "lemon peel, orange, citrus oil", "A bright citrus terpene that commonly shows up in Lemon, Tangie, Gelato, Cookies, and OG-family profiles.", ["citrus", "sweet", "zest"], "Also found in citrus peels, rosemary, and peppermint.", "Look for limonene when you want a brighter aroma instead of a heavy earthy one."],
  ["Caryophyllene", "pepper, clove, fuel, spice", "A spicy terpene common in Cookies, Diesel, Chem, Kush, and many savory gas-heavy strains.", ["pepper", "gas", "spice"], "Also found in black pepper, cloves, hops, basil, and oregano.", "Caryophyllene is unusual because it can interact with CB2 receptors, so it is often discussed alongside cannabinoids."],
  ["Terpinolene", "pine, tea tree, floral citrus", "Often found in energetic Haze, Jack, Dutch, and citrus-skunk lines. It can smell complex: part pine, part fruit, part herbs.", ["pine", "floral", "citrus"], "Also found in lilac, nutmeg, tea tree, apples, and cumin.", "Terpinolene-heavy strains can feel very different from myrcene-heavy strains even when THC is similar."],
  ["Pinene", "pine needles, rosemary, forest air", "A crisp evergreen terpene that gives strains a fresh forest note and can sharpen the aroma of OG, Jack, and classic pine cultivars.", ["pine", "herbal", "wood"], "Also found in pine needles, rosemary, basil, parsley, and dill.", "Pinene is a good clue when a strain smells like fresh herbs or conifer forest."],
  ["Linalool", "lavender, flowers, soft spice", "A floral terpene that can soften sharp gas or skunk notes. It appears less often as the main terpene but matters when present.", ["lavender", "floral", "spice"], "Also found in lavender, coriander, and rosewood.", "Floral, perfume-like strains often have linalool in the background."],
  ["Humulene", "hops, wood, dry herbs", "A dry, woody terpene that gives structure to herbal, hoppy, and earthy profiles.", ["hops", "wood", "herbal"], "Also found in hops, sage, ginseng, and clove.", "Humulene can make a strain smell less sweet and more herbal or beer-like."],
  ["Ocimene", "orchard fruit, mint, green herbs", "A sweet, airy terpene that appears in tropical, minty, and fresh green profiles.", ["fruit", "mint", "green"], "Also found in mint, parsley, basil, orchids, and kumquats.", "Ocimene usually reads as a top note rather than a heavy base note."],
  ["Nerolidol", "wood, tea, fresh bark", "A secondary terpene with a soft woody-floral tone. It is useful for describing strains that smell like tea, bark, or lightly floral wood.", ["wood", "tea", "floral"], "Also found in tea tree, jasmine, and ginger.", "Nerolidol is usually not the headline terpene, but it can round out dessert and floral strains."],
  ["Bisabolol", "chamomile, honey, soft flowers", "A gentle floral terpene that can add a honeyed, chamomile-like softness to the aroma profile.", ["honey", "chamomile", "floral"], "Also found in chamomile and candeia trees.", "Useful when a strain smells delicate, sweet, and floral rather than loud or gassy."]
];

const glossary = [
  ["Cannabinoids", "Compounds such as THC and CBD that interact with the body's endocannabinoid system."],
  ["THC", "Primary intoxicating cannabinoid; higher percentages can feel stronger but are not the only quality signal."],
  ["CBD", "Non-intoxicating cannabinoid often associated with a milder, clearer profile."],
  ["Terpene", "Aromatic compound that shapes smell, taste, and the character of a strain profile."],
  ["Phenotype", "A specific expression of a genetic cross, similar to a named cut or selection."],
  ["Landrace", "A traditional cultivar adapted to a specific region over generations."],
  ["Hybrid", "A profile with mixed sativa and indica heritage or balanced expression."],
  ["Entourage", "The idea that cannabinoids, terpenes, and other compounds work together in the overall experience."]
];

const state = {
  activeTab: "home",
  query: "",
  type: "all",
  terpene: "all",
  minThc: 0,
  sort: "name",
  compare: JSON.parse(localStorage.getItem("critikalCompare") || "[]").slice(0, 3)
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function saveState() {
  localStorage.setItem("critikalCompare", JSON.stringify(state.compare));
}

function getStrain(id) {
  return strains.find((strain) => strain.id === id);
}

function visibleStrains() {
  const query = state.query.trim().toLowerCase();
  return strains
    .filter((strain) => {
      const haystack = [
        strain.name,
        strain.type,
        strain.lineage,
        strain.terpene,
        strain.note,
        ...strain.flavors,
        ...strain.effects
      ].join(" ").toLowerCase();
      return (
        (!query || haystack.includes(query)) &&
        (state.type === "all" || strain.type === state.type) &&
        (state.terpene === "all" || strain.terpene === state.terpene) &&
        strain.thc >= state.minThc
      );
    })
    .sort((a, b) => {
      if (state.sort === "sativa") return b.sativa - a.sativa || a.name.localeCompare(b.name);
      if (state.sort === "indica") return b.indica - a.indica || a.name.localeCompare(b.name);
      if (state.sort === "thc") return b.thc - a.thc || a.name.localeCompare(b.name);
      if (state.sort === "cbd") return b.cbd - a.cbd || a.name.localeCompare(b.name);
      return a.name.localeCompare(b.name);
    });
}

function typeClass(type) {
  return type.toLowerCase();
}

function cardTemplate(strain) {
  const isCompare = state.compare.includes(strain.id);
  return `
    <article class="strain-card" data-strain-id="${strain.id}">
      <header>
        <h3>${strain.name}</h3>
        <span class="type-pill ${typeClass(strain.type)}">${strain.type}</span>
      </header>
      <p class="lineage">${strain.lineage}</p>
      <div class="balance-bar" aria-label="${strain.sativa}% sativa and ${strain.indica}% indica">
        <span style="width:${strain.sativa}%"></span>
        <span style="width:${strain.indica}%"></span>
      </div>
      <div class="percent-row"><span>Sativa ${strain.sativa}%</span><span>Indica ${strain.indica}%</span></div>
      <div class="mini-grid">
        <div class="mini-row"><span>THC</span><b>${strain.thc}%</b></div>
        <div class="mini-row"><span>CBD</span><b>${strain.cbd}%</b></div>
        <div class="mini-row"><span>Terpene</span><b>${strain.terpene}</b></div>
        <div class="mini-row"><span>Rank</span><b>#${strain.rank}</b></div>
      </div>
      <p class="lineage">${strain.note}</p>
      <div class="tag-row">
        ${[...strain.flavors, ...strain.effects].map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="card-actions">
        <button class="${isCompare ? "is-on" : ""}" type="button" data-action="compare">${isCompare ? "Comparing" : "Compare"}</button>
      </div>
    </article>
  `;
}

function renderIndex() {
  const list = visibleStrains();
  const grid = $("#strain-grid");
  $("#result-count").textContent = `Showing ${list.length} of ${strains.length} strains`;
  grid.innerHTML = list.length
    ? list.map(cardTemplate).join("")
    : `<div class="empty-state">No strain profiles match those filters. Try a softer THC threshold or a wider terpene search.</div>`;
}

function renderFeatured() {
  const featured = getStrain("lemon-cherry-gelato") || strains[0];
  $("#featured-strain").innerHTML = cardTemplate(featured);
  $("#strain-count").textContent = strains.length;
}

function renderTerpenes() {
  $("#terpene-grid").innerHTML = terpenes
    .map(([name, aroma, description, tags, foundIn, readingTip]) => `
      <article class="terpene-card">
        <p class="eyebrow">${name}</p>
        <h3>${aroma}</h3>
        <p>${description}</p>
        <p><strong>Found beyond cannabis:</strong> ${foundIn}</p>
        <p><strong>How to read it:</strong> ${readingTip}</p>
        <div class="tag-row">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </article>
    `)
    .join("");
}

function renderGlossary() {
  $("#glossary-list").innerHTML = glossary
    .map(([term, definition]) => `<div><b>${term}</b><span>${definition}</span></div>`)
    .join("");
}

function renderComparePicker() {
  const options = `<option value="">Choose a strain</option>${strains
    .map((strain) => `<option value="${strain.id}">${strain.name}</option>`)
    .join("")}`;
  $("#compare-picker").innerHTML = [0, 1, 2]
    .map((slot) => `
      <label class="field">
        <span>Compare slot ${slot + 1}</span>
        <select data-compare-slot="${slot}">${options}</select>
      </label>
    `)
    .join("");
  $$("[data-compare-slot]").forEach((select, index) => {
    select.value = state.compare[index] || "";
  });
}

function metricRow(label, value, max, suffix = "%") {
  const width = Math.min(100, (value / max) * 100);
  return `
    <div class="metric">
      <div class="percent-row"><span>${label}</span><span>${value}${suffix}</span></div>
      <div class="balance-bar"><span style="width:${width}%"></span><span style="width:${100 - width}%"></span></div>
    </div>
  `;
}

function renderCompare() {
  renderComparePicker();
  const selected = state.compare.map(getStrain).filter(Boolean);
  $("#compare-grid").innerHTML = selected.length
    ? selected.map((strain) => `
      <article class="compare-card">
        <span class="type-pill ${typeClass(strain.type)}">${strain.type}</span>
        <h3>${strain.name}</h3>
        <p>${strain.lineage}</p>
        ${metricRow("Sativa", strain.sativa, 100)}
        ${metricRow("Indica", strain.indica, 100)}
        ${metricRow("THC", strain.thc, 32)}
        ${metricRow("CBD", strain.cbd, 10)}
        <div class="mini-row"><span>Dominant terpene</span><b>${strain.terpene}</b></div>
        <div class="tag-row">${[...strain.flavors, ...strain.effects].map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </article>
    `).join("")
    : `<div class="empty-state">Add strains from the index or use the selectors above to start a comparison.</div>`;
}

function renderAll() {
  renderIndex();
  renderCompare();
}

function setTab(tab) {
  state.activeTab = tab;
  $$("[data-tab-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === tab));
  $$("[data-tab-link]").forEach((link) => link.classList.toggle("is-active", link.dataset.tabLink === tab));
  $(".primary-nav").classList.remove("is-open");
  $(".nav-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleCompare(id) {
  if (state.compare.includes(id)) {
    state.compare = state.compare.filter((item) => item !== id);
  } else {
    if (state.compare.length >= 3) state.compare.shift();
    state.compare.push(id);
  }
  saveState();
  renderAll();
}

function initFilters() {
  const terpeneSelect = $("#terpene-filter");
  [...new Set(strains.map((strain) => strain.terpene))].sort().forEach((terpene) => {
    terpeneSelect.insertAdjacentHTML("beforeend", `<option value="${terpene}">${terpene}</option>`);
  });

  $("#search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderIndex();
  });
  $("#type-filter").addEventListener("change", (event) => {
    state.type = event.target.value;
    renderIndex();
  });
  $("#terpene-filter").addEventListener("change", (event) => {
    state.terpene = event.target.value;
    renderIndex();
  });
  $("#thc-filter").addEventListener("input", (event) => {
    state.minThc = Number(event.target.value);
    $("#thc-value").textContent = `${state.minThc}%`;
    renderIndex();
  });
  $("#sort-select").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderIndex();
  });
  $("#reset-filters").addEventListener("click", () => {
    state.query = "";
    state.type = "all";
    state.terpene = "all";
    state.minThc = 0;
    state.sort = "name";
    $("#search-input").value = "";
    $("#type-filter").value = "all";
    $("#terpene-filter").value = "all";
    $("#thc-filter").value = 0;
    $("#thc-value").textContent = "0%";
    $("#sort-select").value = "name";
    renderIndex();
  });
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const tabLink = event.target.closest("[data-tab-link]");
    if (tabLink) {
      setTab(tabLink.dataset.tabLink);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      const id = event.target.closest("[data-strain-id]").dataset.strainId;
      toggleCompare(id);
      return;
    }

  });

  $(".nav-toggle").addEventListener("click", () => {
    const nav = $(".primary-nav");
    const isOpen = nav.classList.toggle("is-open");
    $(".nav-toggle").setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-compare-slot]");
    if (!select) return;
    const slot = Number(select.dataset.compareSlot);
    const next = [...state.compare];
    if (select.value) next[slot] = select.value;
    else next.splice(slot, 1);
    state.compare = [...new Set(next.filter(Boolean))].slice(0, 3);
    saveState();
    renderAll();
  });

}

function initHeroRotation() {
  const slides = $$(".hero-slide");
  if (slides.length < 2) return;

  let active = 0;
  window.setInterval(() => {
    slides[active].classList.remove("is-active");
    active = (active + 1) % slides.length;
    slides[active].classList.add("is-active");
  }, 10000);
}

function boot() {
  renderFeatured();
  renderTerpenes();
  renderGlossary();
  initFilters();
  initEvents();
  initHeroRotation();
  renderAll();
}

boot();
