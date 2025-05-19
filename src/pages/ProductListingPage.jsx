import React, { useState } from "react";
import FilterGroup from "../components/FilterGroup";
import Section from "../components/Section";
import ProductListing, { allProducts } from "../components/ProductListing"; // <-- usa o array central

const ProductListingPage = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    condition: [],
  });

  const [sort, setSort] = useState("asc");

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const current = prev[filterType];
      const exists = current.includes(value);
      const updated = exists
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [filterType]: updated };
    });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = allProducts
    .filter((product) =>
      filters.brand.length ? filters.brand.includes(product.brand) : true
    )
    .filter((product) =>
      filters.category.length
        ? filters.category.includes(product.category)
        : true
    )
    .filter((product) =>
      filters.gender.length ? filters.gender.includes(product.gender) : true
    )
    .filter((product) =>
      filters.condition.length
        ? filters.condition.includes(product.condition)
        : true
    )
    .sort((a, b) => {
      const priceA = a.priceDiscount ?? a.price;
      const priceB = b.priceDiscount ?? b.price;
      return sort === "asc" ? priceA - priceB : priceB - priceA;
    });

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-8 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
        {/* Linha topo: resultado + ordenar */}
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] font-bold text-gray-700">
            Resultado para "Tênis" - {filteredProducts.length} produto
            {filteredProducts.length !== 1 ? "s" : ""}
          </h1>

          <div
            className="flex items-center gap-2 px-5 py-4 rounded-lg border border-black bg-[#F5F5F5]"
            style={{ width: "308px", height: "60px" }}
          >
            <label
              htmlFor="sort"
              className="text-[16px] font-semibold text-gray-700"
            >
              Ordenar por:
            </label>
            <select
              id="sort"
              className="text-[16px] text-gray-700 px-3 py-1 rounded focus:outline-none"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Conteúdo principal: filtro e produtos lado a lado */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Coluna de filtros */}
          <aside className="w-full md:w-[308px] space-y-6 py-5 px-8 bg-white self-start mt-6">
            <h2 className="text-[16px] text-gray-700 font-semibold">Filtrar por</h2>
            <hr className="border border-gray-300" />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Nike", value: "Nike" },
                { text: "Levi's", value: "Levi's" },
                { text: "Karhu", value: "Karhu" },
              ]}
              selectedValues={filters.brand}
              onChange={(val) => handleFilterChange("brand", val)}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esporte e Lazer", value: "Esporte e Lazer" },
                { text: "Casual", value: "Casual" },
                { text: "Utilitário", value: "Utilitário" },
                { text: "Corrida", value: "Corrida" },
              ]}
              selectedValues={filters.category}
              onChange={(val) => handleFilterChange("category", val)}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: "Masculino", value: "Masculino" },
                { text: "Feminino", value: "Feminino" },
                { text: "Unisex", value: "Unisex" },
              ]}
              selectedValues={filters.gender}
              onChange={(val) => handleFilterChange("gender", val)}
            />
            <FilterGroup
              title="Estado"
              inputType="checkbox"
              options={[
                { text: "Novo", value: "Novo" },
                { text: "Usado", value: "Usado" },
              ]}
              selectedValues={filters.condition}
              onChange={(val) => handleFilterChange("condition", val)}
            />
          </aside>

          {/* Coluna de produtos */}
          <div className="flex-1">
            <Section>
              <ProductListing products={filteredProducts} columns={3} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
