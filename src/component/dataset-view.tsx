"use client";

import { ChartVisualization } from "./chart-visualization";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import api from "@/utils/axios";

export function DatasetView({ data }: DatasetViewProps) {
  const dataset = data;

  const [loadingDatasetId, setLoadingDatasetId] = useState<string | null>(null);
  const [selectDataset, onSelectDataset] = useState<DatasetData | null>(null);

  useEffect(() => {
    if (!dataset) return;
    const fetchData = async () => {
      try {
        setLoadingDatasetId(dataset.id);
        const response = await api.post(
          `/data/attribute/${dataset.parentId}`,

          {
            nameCode: dataset.name,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        onSelectDataset(response.data);
      } catch (e) {
        console.error("Failed to fetch dataset : ", e);
      } finally {
        setLoadingDatasetId(null);
      }
    };
    fetchData();
  }, [dataset]);

  if (!dataset) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 italic">Dataset not found</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      {/* Dataset Info */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-bold text-balance">
          {selectDataset?.attributeName}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold">Published By :</span>{" "}
            {dataset.source}
          </p>
        </div>
      </div>

      <div className="border rounded-xl p-4 shadow-sm">
        <div className="overflow-x-auto">
          {loadingDatasetId ? (
            <div className="flex justify-center items-center h-48">
              <ClipLoader size={25} color="text-border" />
            </div>
          ) : (
            selectDataset && (
              <>
                
                  {/* <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Visualizations</h3>
                  </div> */}
                  <div className="overflow-x-auto text-gray-500 text-sm italic">
                    <ChartVisualization columns={selectDataset.columns} rows={selectDataset.rows} />
                  </div>
               
                <DataTable
                  columns={selectDataset?.columns}
                  rows={selectDataset?.rows}
                  title={selectDataset?.attributeName}
                />

              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}
